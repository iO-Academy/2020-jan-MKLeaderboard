import React, {Component} from 'react';
import './DropDownInput.css';

default export class DropDownInput extends Component {
    render() {
        <select id="cohortsDropDown">
            { this.props.cohortDropDown }
        </select> 
    }
}