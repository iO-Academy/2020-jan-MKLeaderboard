import React, {Component} from 'react';
import './trackCard.css'

class TrackCard extends Component {
    render() {
        return (
            <div className="trackCard">
            <img className="trackCardImg" src={ this.props.trackCardContent.img } alt={ this.props.trackCardContent.img } />
            <h3>{ this.props.trackCardContent.name }</h3>
        </div>
    );
    }
}

export default TrackCard