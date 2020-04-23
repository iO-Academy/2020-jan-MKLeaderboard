import React, { Component } from 'react';
import './createRacerForm.css';
import "../DropDownInput/DropDownInput";
import DropDownInput from "../DropDownInput/DropDownInput";

export default class CreateRacerForm extends Component {

    state = { 
        cohortsListData: [],
        characterListData: [],
        charImg: ''
    };

    setCharImg = (id) => {
        let characterChoice = this.state.characterListData.find(character => character.value === id);
        this.setState({ charImg: characterChoice.url });
    }

    componentDidMount() {
            fetch('http://localhost:4000/cohorts').then(cohortData => cohortData.json())
                .then(cohortData => {

                fetch('http://localhost:4000/characters').then(charData => charData.json())
                    .then(charData => {

                            let cohorts = cohortData.data;
                            let characters = charData.data;

                            const cohortsList = cohorts.map((cohort => {
                                return {
                                    'value': cohort._id,
                                    'name': cohort.name
                                }
                            }));

                            const charsList = characters.map((character => {
                                return {
                                    'value': character.id,
                                    'name': character.name,
                                    'url': character.url
                                }
                            }));

                            this.setState({ cohortsListData: cohortsList, characterListData: charsList });
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
                    <input type="text" className="racerName" />

                    <label>Cohort:</label>
                    <DropDownInput options={ this.state.cohortsListData } />

                    <label>Favourite character:</label>
                    <DropDownInput options={ this.state.characterListData } callback={ this.setCharImg } />

                    <input type="submit" className="submitBtn" label="Submit" />
                </div>
            </form>
        )
    }
}