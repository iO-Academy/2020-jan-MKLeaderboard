import React, { Component } from 'react';
import './createRacerForm.css';
import "../DropDownInput/DropDownInput";

export default class CreateRacerForm extends Component {

    state = { 
        cohortsListData: []
    };

    componentDidMount() {
        // fetch('http://localhost:4000/cohorts')
        // .then(res => res.json())
        // .then((responseData) => {
        //     let cohorts = responseData.data;
        //
        //     const cohortsList = cohorts.map((cohort) => cohortDropDownContent={cohort});
        //     //this.setState({ cohortsListData: cohortsList });
        // })

        Promise.all([
            fetch('http://localhost:4000/cohorts'),
            fetch('http://localhost:4000/characters')
        ])
            .then(function(responses) {
                return responses.map(function(response) {
                    return response.json();
                })
            })
            .then((responseData) => {
                let cohorts = responseData[0].data;
                let characters = responseData[1].data;

                const cohortsList = cohorts.map((cohort => cohortDropDownContent={ cohort }));

            })
    }

    render() {
        return (
            <form className="createRacerForm">
                
                {/* <img src={} /> */}
                <input type="text" name="racerName" />
                
                <label>Select your character:</label>
                {/* <DropDownInput /> */}
{/*  */}
                <label>Select your cohort:</label>
                {/* <DropDownInput /> */}

                <button type="submit" name="submitBtn" label="Submit" method="post" />

            </form>
        )
    }
}