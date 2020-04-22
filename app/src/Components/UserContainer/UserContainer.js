import React, { Component } from 'react';
import UserCard from '../../Components/UserCard/UserCard';

export default class UserContainer extends Component {

    state = {
        userCardComponents: [],
        displayContents: ''
    };

    componentDidMount() {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then((responseData) => {
                let users = responseData.data;

                const userComponents = users.map((userCard) => <UserCard key={userCard._id} userCardContent={userCard} />)
                this.setState({userCardComponents: userComponents})
            })
            .catch((e) => {
                this.setState({displayContents: ''})
            })
    }

    render()
    {
        return (
            <div className="userContainer">
            { this.state.userCardComponents }
            </div>
    )
    }
}
