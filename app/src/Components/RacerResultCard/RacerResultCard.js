import React, {Component} from 'react';
import DropDownInput from "../DropDownInput/DropDownInput";
import './racerResultCard.css';

export default class RacerResultCard extends Component {

    state = {
        charImg: this.props.charImg
        // userListData: this.props.userListData
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps && this.props.charImg) {
            if (this.props.charImg === 'none') {
                this.setState({ charImg: '' });
            } else {
                this.setState({ charImg: this.props.charImg });
            }
        }
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

                <div className="racerResultInputs">
                    <div>
                        <label>Racer name:</label>
                        <DropDownInput options={ this.props.users } inputName={ `inputResultUser${this.props.userNo}` } updateHandler={ this.props.updateHandler } />
                    </div>

                    <div>
                        <label>Position:</label>
                        <DropDownInput options={ this.props.positions } inputName={ `inputResultPosition${this.props.userNo}` } updateHandler={ this.props.updateHandler } />
                    </div>
                </div>

            </div>
    )

    }
}
