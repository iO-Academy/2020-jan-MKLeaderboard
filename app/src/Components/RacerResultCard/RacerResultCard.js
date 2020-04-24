import React, {Component} from 'react';
import DropDownInput from "../DropDownInput/DropDownInput";
import './racerResultCard.css';

export default class RacerResultCard extends Component {

    state = {
        charImg: this.props.charImg
        // userListData: this.props.userListData
    }

    // handleCharacterChange = (e) => {
    //     if( e.target.value !== 'none' ) {
    //         let selectedUser = this.state.userListData.find(user => user.value === e.target.value);
    //         this.setState({ charImg: selectedUser.favChar });
    //     }
    // }

    render() {
        return (
            <div className="racerResultCard">

                <div className="characterBox">
                    { this.state.charImg ? <img className="charImg" src={ this.state.charImg } alt="Character" /> : '' }
                </div>

                <label>Racer name:</label>
                <DropDownInput options={ this.props.userListData } inputName={ `inputResultUser${this.props.userNo}` } updateHandler={ this.props.handleChange } />

                <label>Position:</label>
                <DropDownInput options={ this.props.positionListData } inputName={ `inputResultPosition${this.props.userNo}` } updateHandler={ this.props.handleChange } />

            </div>
    )

    }
}
