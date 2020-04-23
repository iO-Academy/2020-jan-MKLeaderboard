import React, { Component } from 'react';
import './createRacerForm.css';
// import "../DropDownInput/DropDownInput";

export default class CreateRacerForm extends Component {

    state = { 
        cohortsListData: []
    };

    componentDidMount() {
        fetch('http://localhost:4000/cohorts')
        .then(res => res.json())
        .then((responseData) => {
            let cohorts = responseData.data;

            // const cohortsList = cohorts.map((cohort) => cohortDropDownContent={cohort});
            //this.setState({ cohortsListData: cohortsList });
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