import React, { Component } from 'react';
import './createRacerForm.css';
import "../DropDownInput/DropDownInput";
import DropDownInput from "../DropDownInput/DropDownInput";
import validator from 'validator';

export default class CreateRacerForm extends Component {

    state = { 
        cohortsListData: [],
        characterListData: [],
        charImg: '',
        formMessage: '',
        inputRacerName: '',
        inputCohort: '',
        inputFavChar: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.inputRacerName) {
            this.setState({ formMessage: 'Name field cannot be blank' })
        } else {
            if (!validator.isLength(this.state.inputRacerName, { min: 2, max: 12 })) {
                this.setState({ formMessage: 'Name must be between 2 and 12 characters long' })
            } else {
                let requestData = {
                    "name": this.state.inputRacerName,
                    "cohort": this.state.inputCohort,
                    "favChar": this.state.inputFavChar
                }

                fetch('http://localhost:4000/users', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                }).then(resData => resData.json())
                    .then(responseData => {
                        console.log(responseData)
                        if (!responseData) {
                            this.setState({ formMessage: 'No response received' });
                        } else if (responseData.status !== 200) {
                            this.setState({ formMessage: responseData.message });
                        } else {
                            window.location.pathname = '/';
                        }
                    });
            }
        }
    };

    handleChange = (e) => {
        let stateKey = e.target.name;
        let stateValue = validator.blacklist(e.target.value, '( |<|>|\'|"|`|&)');
        if (stateKey === 'inputFavChar') {
            let characterChoice = this.state.characterListData.find(character => character.value === stateValue);
            this.setState( { [stateKey]: stateValue, charImg: characterChoice.url } );
        } else {
            this.setState( { [stateKey]: stateValue});
        }
    }

    componentDidMount() {
            fetch('http://localhost:4000/cohorts').then(cohortData => cohortData.json())
                .then(cohortData => {

                fetch('http://localhost:4000/characters').then(charData => charData.json())
                    .then(charData => {

                            let cohorts = cohortData.data;
                            let characters = charData.data;

                            const cohortsList = cohorts.map(cohort => {
                                return {
                                    'value': cohort._id,
                                    'name': cohort.name
                                }
                            });

                            const charsList = characters.map(character => {
                                return {
                                    'value': character.id,
                                    'name': character.name,
                                    'url': character.url
                                }
                            });

                            this.setState({
                                cohortsListData: cohortsList,
                                characterListData: charsList,
                                inputCohort: cohortsList[0].value,
                                inputFavChar: charsList[0].value
                            });
                    })
            })
    }

    render() {
        return (
            <form className="createRacerForm" onSubmit={ this.handleSubmit } >

                <div className="characterBox">
                    { this.state.charImg ? <img className="charImg" src={ this.state.charImg } alt="Character" /> : '' }
                </div>

                <div className="formContent">
                    <div className="formMessage">{ this.state.formMessage }</div>
                    <input type="text" name="inputRacerName" placeholder="Enter Racer Name" className="racerName" required minLength={2} maxLength={12} onChange={ this.handleChange } />

                    <label>Cohort:</label>
                    <DropDownInput options={ this.state.cohortsListData } inputName={ 'inputCohort' } updateHandler={ this.handleChange } />

                    <label>Favourite character:</label>
                    <DropDownInput options={ this.state.characterListData } inputName={ 'inputFavChar' } updateHandler={ this.handleChange } />

                    <input type="submit" className="submitBtn" value="Submit" />
                </div>
            </form>
        )
    }
}