import React, {Component} from 'react';
import './DropDownInput.css';

export default class DropDownInput extends Component {

    state = {
        options: [],
        updateHandler: null,
        inputName: ''
    }

    componentDidMount() {
            this.setState( { options: this.props.options, inputName: this.props.inputName, updateHandler: this.props.updateHandler });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            if(typeof this.props.updateHandler === 'function') {
                this.setState({ options: this.props.options, updateHandler: this.props.updateHandler });
            } else {
                this.setState( { options: this.props.options });
            }
        }
    }

    handleInputChange = (e) => {
        if(this.state.updateHandler) {
            this.state.updateHandler(e);
        }
    }

    render() {
        return (
            <select name={ this.state.inputName } className="dropDown" onChange={ this.handleInputChange }>
            { this.state.options ? this.state.options.map(item => <option key={ item.value } value={ item.value }>{ item.name }</option>) : '' }
            </select>
        )
    }
}