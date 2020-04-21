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

                this.setState({ trackCards: responseData.data });

                this.setState({trackCardComponents: this.state.trackCards.map((trackCard) => {
                        return <TrackCard key={trackCard.id} trackCardContent={trackCard} />
                    })
                })

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
