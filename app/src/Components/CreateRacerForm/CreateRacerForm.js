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

    const setCharImg = (id) => {
        let characterChoice = this.characterListData.find(character => character.id === id);
        this.setState({ charImg: characterChoice.url });
    }

    componentDidMount() {
        Promise.all([
            fetch('http://localhost:4000/cohorts'),
            fetch('http://localhost:4000/characters')
        ])
            .then((responses) => {
                return responses.map((response) => {
                    return response.json();
                })
            })
            .then((responseData) => {
                let cohorts = responseData[0].data;
                let characters = responseData[1].data;

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
                    }
                }));

                this.setState({ cohortsListData: cohortsList, characterListData: charsList });
            })
    }

    render() {
        return (
            <form className="createRacerForm">
                
                <img className="charImg" src={this.state.showCharImg} alt="Character" />

                <input type="text" className="racerName" />
                
                <label>Select your cohort:</label>
                <DropDownInput options={this.state.cohortsListData} />

                <label>Select your favourite character:</label>
                <DropDownInput options={this.state.characterListData} callback={this.setCharImg} />

                <button type="submit" className="submitBtn" label="Submit" method="post" />

            </form>
        )
    }
}