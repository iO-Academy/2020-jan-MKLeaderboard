import React, { Component } from 'react';
import TrackCard from '../TrackCard/TrackCard';
import './trackContainer.css';

export default class TrackContainer extends Component {

    state = {
        trackCardComponents: []
    };

    componentDidMount() {

        fetch('http://localhost:4000/tracks')
            .then(res => res.json())
            .then((responseData) => {
                let tracks = responseData.data;

                const trackComponents = tracks.map((trackCard) => <TrackCard key={trackCard.id} trackCardContent={trackCard}/>)
                this.setState({trackCardComponents: trackComponents})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render()
    {
        return (
            <div className="trackContainer">
                { this.state.trackCardComponents.length > 0 ? this.state.trackCardComponents : <p className="noRecordsFound">No Records Found!</p> }
            </div>
        )
    }
}
