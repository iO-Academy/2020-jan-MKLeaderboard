import React, {Component} from 'react';
import './DropDownInput.css';

export default class DropDownInput extends Component {

    state = {
        data: [],
        callback: null
    }

    componentDidMount() {

        if(typeof this.props.callback === 'function') {
            this.setState({ data: this.props.data, callback: this.props.callback });
        } else {
            this.setState( { data: this.props.data });
        }

    }

    const handleInputChange = (e) => {
        if(this.state.callback) {
            this.state.callback(e.target.value);
        }
    }
}

    render() {
        return(
            <select id="cohortsDropDown" onchange={ handleInputChange(e) } >
                { this.state.data.map(item => <option value={item.value}>{item.name}</option>)}
            </select>
        )
    }
}