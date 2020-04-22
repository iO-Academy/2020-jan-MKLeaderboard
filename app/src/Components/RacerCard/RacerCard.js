import React, {Component} from 'react';
import './racerCard.css'


class RacerCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {racers: []}
    // }
    // componentDidMount() {
    //     fetch( 'http://localhost:4000/users')
    //         .then( data => data.json() )
    //         .then( data => console.log(data))
    //         // .then( ({data: racers}) => this.setState({racers}))
    //     // console.log(this.state)
    // }

                // <img className="racerCardImg" src={ racerCardContent.favChar.url } alt={ racerCardContent.favChar.name } />
                // <h3>{ racerCardContent.name }</h3>
                // <p>Cohort: { racerCardContent.cohort.name }</p>
                // <p>Favourite Character: { racerCardContent.favChar.name }</p>
    render() {
        return (
            <div className="racerCard">
                <img className="racerCardImg" src="./images/mario.png"/>
                <h3>Michael123</h3>
                <p className="dataLabel">Cohort:</p>
                <p>Naked Molerats</p>
                <p className="dataLabel">Favourite Character:</p>
                <p>Baby Bowser</p>
            </div>
        );
    }
}

export default RacerCard
