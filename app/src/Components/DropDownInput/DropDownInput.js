import React, {Component} from 'react';
import './DropDownInput.css';

export default class DropDownInput extends Component {

    state = {
        options: [],
        callback: null
    }

    componentDidMount() {

        if(typeof this.props.callback === 'function') {
            this.setState({ options: this.props.options, callback: this.props.callback });
        } else {
            this.setState( { options: this.props.options });
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            if(typeof this.props.callback === 'function') {
                this.setState({ options: this.props.options, callback: this.props.callback });
            } else {
                this.setState( { options: this.props.options });
            }
        }
    }

    handleInputChange = (e) => {
        if(this.state.callback) {
            this.state.callback(e.target.value);
        }
    }

    render() {
        return (
            <select className="cohortsDropDown" onChange={ this.handleInputChange } >
            { this.state.options ? this.state.options.map(item => <option value={item.value}>{item.name}</option>) : '' }
            </select>
        )
    }
}