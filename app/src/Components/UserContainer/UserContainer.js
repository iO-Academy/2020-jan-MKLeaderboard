import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';
import './userContainer.css';

export default class UserContainer extends Component {

    state = {
        userCardComponents: [],
    };

    componentDidMount() {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then((responseData) => {
                let users = responseData.data;

                const userComponents = users.map((userCard) => <UserCard key={userCard._id} userCardContent={userCard} />)
                this.setState({ userCardComponents: userComponents })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render()
    {
        return (
            <div className="userContainer">
            { this.state.userCardComponents.length > 0 ? this.state.userCardComponents : <p className="noRecordsFound">No Records Found!</p> }
            </div>
    )
    }
}
