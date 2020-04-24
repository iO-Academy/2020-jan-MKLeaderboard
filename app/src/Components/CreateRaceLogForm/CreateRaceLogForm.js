import React, { Component } from 'react';
import './CreateRaceLogForm.css';
import "../DropDownInput/DropDownInput";
import DropDownInput from "../DropDownInput/DropDownInput";
import RacerResultCard from "../RacerResultCard/RacerResultCard";
import validator from 'validator';

export default class CreateRaceLogForm extends Component {

    state = {
        userListData: [],
        positionListData: [
            { "value": "1", "name": "1st" },
            { "value": "2", "name": "2nd" },
            { "value": "3", "name": "3rd" },
            { "value": "4", "name": "4th" },
            { "value": "5", "name": "5th" },
            { "value": "6", "name": "6th" },
            { "value": "7", "name": "7th" },
            { "value": "8", "name": "8th" },
            { "value": "9", "name": "9th" },
            { "value": "10", "name": "10th" },
            { "value": "11", "name": "11th" },
            { "value": "12", "name": "12th" },
        ],

        trackListData: [],

        formMessage: '',

        inputResultTrack: 'none',

        inputResultUser1: 'none',
        inputResultPosition1: '',

        inputResultUser2: 'none',
        inputResultPosition2: '',

        inputResultUser3: 'none',
        inputResultPosition3: '',

        inputResultUser4: 'none',
        inputResultPosition4: '',

        charImg1: '',
        charImg2: '',
        charImg3: '',
        charImg4: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

                let enteredUsers = [];

                for(let i = 1; i < 5; i++) {
                    if (`this.state.inputResultUser${i}` && `this.state.inputResultPosition${i}` && `this.state.inputResultUser${i}` !== 'none') {
                        enteredUsers.push({
                            id: `this.state.inputResultUser${i}`,
                            position: `this.state.inputResultPosition${i}`
                        })
                    }
                }
                let requestData = {
                    "track": this.state.inputResultTrack,
                    "users": enteredUsers,
                }

                fetch('http://localhost:4000/racelogs', {
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
                            window.location.pathname = '/results';
                        }
                    });
        //     }
        // }
    };

    handleChange = (e) => {
        let stateKey = e.target.name;
        let stateValue = e.target.value;

        if (stateValue !== 'none' && stateKey.includes('inputResultUser')) {
            let charImgNo = 'charImg' + stateKey.substr(15, 1);
            let selectedUser = this.state.userListData.find(user => user.value === e.target.value);
            this.setState({ [stateKey]: stateValue, [charImgNo]: selectedUser.favChar });
        } else {
            this.setState({ [stateKey]: stateValue });
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/users').then(userData => userData.json())
            .then(userData => {

                fetch('http://localhost:4000/tracks').then(trackData => trackData.json())
                    .then(trackData => {

                        let users = userData.data;
                        let tracks = trackData.data;

                        var userList = users.map(user => {
                            return {
                                'value': user._id,
                                'name': user.name,
                                'favChar': user.favChar.url
                            }
                        });

                        userList.unshift({ 'value' : 'none', 'name' : 'Select...' })

                        var trackList = tracks.map(track => {
                            return {
                                'value': track.id,
                                'name': track.name,
                            }
                        });
                        trackList.unshift({ 'value' : 'none', 'name' : 'Select...' })

                        this.setState({
                            userListData: userList,
                            trackListData: trackList
                        });
                    })
            })
    }

    render() {
        return (
            <form className="createRaceLogForm" onSubmit={ this.handleSubmit } >
                <div className="formMessage">{ this.state.formMessage }</div>

                <DropDownInput options={ this.state.trackListData } inputName={ 'inputResultTrack' } updateHandler={ this.handleChange } />

                <RacerResultCard userNo="1" users={this.state.userListData} positions={this.state.positionListData} updateHandler={this.handleChange} favChar={this.state.favChar1} />
                <RacerResultCard userNo="2" users={this.state.userListData} positions={this.state.positionListData} updateHandler={this.handleChange} favChar={this.state.favChar2} />
                <RacerResultCard userNo="3" users={this.state.userListData} positions={this.state.positionListData} updateHandler={this.handleChange} favChar={this.state.favChar3} />
                <RacerResultCard userNo="4" users={this.state.userListData} positions={this.state.positionListData} updateHandler={this.handleChange} favChar={this.state.favChar4} />

                <input type="submit" className="submitBtn" value="Submit" />
            </form>
        )
    }
}