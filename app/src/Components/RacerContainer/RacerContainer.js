import React, { Component } from 'react';
import RacerCard from '../RacerCard/RacerCard';
import './racerContainer.css';

export default class RacerContainer extends Component {

    state = {
        racerCardComponents: [],
    };

    componentDidMount() {

        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then((responseData) => {
                let racers = responseData.data;

                const racerComponents = racers.map((racer) => <RacerCard key={racer._id} racerCardContent={racer} />)
                this.setState({ racerCardComponents: racerComponents })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render()
    {
        return (
            <div className="racerContainer">
            { this.state.racerCardComponents.length > 0 ? this.state.racerCardComponents : <p className="noRecordsFound">No Records Found!</p> }
            </div>
    )
    }
}
