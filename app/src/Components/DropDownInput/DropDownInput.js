import React, {Component} from 'react';
import './DropDownInput.css';

export default class DropDownInput extends Component {
    render() {
        return(
            <select id="cohortsDropDown">
            {this.props.cohortsListData
            </select>
        )
    }
}