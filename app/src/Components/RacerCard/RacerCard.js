import React, {Component} from 'react';
import './racerCard.css'

class RacerCard extends Component {
    render() {
        return (
            <div className="racerCard">
                <img className="racerCardImg" src={ this.props.racerCardContent.favChar.url } alt={ this.props.racerCardContent.favChar.name } />
                <h3>{ this.props.racerCardContent.name }</h3>
                <p className="dataLabel">Cohort:</p>
                <p>{ this.props.racerCardContent.cohort.name }</p>
                <p className="dataLabel">Favourite Character:</p>
                <p>{ this.props.racerCardContent.favChar.name }</p>
            </div>
        );
    }
}

export default RacerCard
