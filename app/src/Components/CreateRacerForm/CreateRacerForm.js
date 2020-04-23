import React, { Component } from 'react';
import './createRacerForm.css';
import "../DropDownInput/DropDownInput";

export default class CreateRacerForm extends Component {

    state = { 
        cohortsListData: [],
        characterListData: [],
        showCharImg: false
    };

    showChar = () => {
        this.setState({ showCharImg: true });
    }

    hideChar = () => {
        this.setState({ showCharImg: false });
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
                        'Index': cohort._id,
                        'Name': cohort.name
                    }
                }));

                const charsList = characters.map((character => {
                    return {
                        'Index': character.id,
                        'Name': character.name,
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


                <label>Select your favourite character:</label>

                <button type="submit" className="submitBtn" label="Submit" method="post" />

            </form>
        )
    }
}