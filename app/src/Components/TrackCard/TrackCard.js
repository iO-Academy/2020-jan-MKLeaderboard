import React, {Component} from 'react';
import './trackCard.css'

class TrackCard extends Component {
    render() {
        return (
            <div className="trackCard">
            <img className="trackCardImg" src={ this.props.trackCardContent.favChar.url } alt={ this.props.trackCardContent.favChar.name } />
        <h3>{ this.props.trackCardContent.name }</h3>
        <p className="dataLabel">Cohort:</p>
        <p>{ this.props.racerCardContent.cohort.name }</p>
        <p className="dataLabel">Favourite Character:</p>
        <p>{ this.props.racerCardContent.favChar.name }</p>
        </div>
    );
    }
}

export default TrackCard