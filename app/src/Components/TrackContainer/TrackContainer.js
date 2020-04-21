import React, { Component } from 'react';
import TrackCard from '../../Components/TrackCard/TrackCard';

export default class TracksContainer extends Component {

    state = {
        trackCards: [],
        trackCardComponents: []
    };

    componentDidMount() {

        fetch('http://localhost:4000/tracks')
            .then(res => res.json())
            .then((responseData) => {
                let tracks = responseData.data;

                //this.setState({ trackCards: responseData.data });

                const trackComponents = tracks.map((trackCard) => <TrackCard key={trackCard.id} trackCardContent={trackCard} />)
                this.setState({trackCardComponents:  trackComponents})
            })
            .catch(console.log);
    }

    render()
    {
        return (
            <div>
            { this.state.trackCardComponents }
            </div>
        )
    }
}
