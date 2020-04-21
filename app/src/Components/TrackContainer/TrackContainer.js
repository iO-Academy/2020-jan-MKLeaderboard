import React, { Component } from 'react';
import TrackCard from '../../Components/TrackCard/TrackCard';

export default class TracksContainer extends Component {

    state = {
        trackCards: []
    };

    componentDidMount() {

        fetch('localhost:4000/tracks')
            .then(res => res.json())
            .then((responseData) => {

                this.setState({ trackCards: responseData.data });

                let trackCardComponents = this.trackCards.map((trackCard) => {
                    <TrackCard key={trackCard.id} trackCardContent={trackCard} />
                });

                render()
                {
                    return (
                        <div>
                        { trackCardComponents }
                        </div>
                    )
                }

            })
            .catch(console.log);
    }
}
