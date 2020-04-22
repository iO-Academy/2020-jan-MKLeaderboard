import React, { Component } from 'react';
import TrackCard from '../../Components/UserCard/UserCard';

export default class UserContainer extends Component {

    state = {
        userCards: [],
        userCardComponents: []
    };

    componentDidMount() {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then((responseData) => {
                let users = responseData.data;

                const userComponents = users.map((userCard) => <UserCard key={userCard.id} userCardContent={userCard} />)
                this.setState({userCardComponents: userComponents})
            })
            .catch(console.log);
    }

    render()
    {
        return (
            <div>
            { this.state.userCardComponents }
            </div>
    )
    }
}
