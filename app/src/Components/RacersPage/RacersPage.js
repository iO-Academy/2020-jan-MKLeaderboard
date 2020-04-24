import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import RacerContainer from "../RacerContainer/RacerContainer";
import PageHeaderBar from '../PageHeaderBar/PageHeaderBar';

class RacersPage extends Component {
    state = {
        modalOptions: {
            modalHeading: 'Create a Racer',
            modalContent: 'CreateRacerForm',
            modalButtonText: 'Create a Racer'
        }
    }

    render() {
        return (
            <div className='racersContent'>
                <PageHeaderBar pageTitle='Racers' showUtilityBar={ true } modalOptions={ this.state.modalOptions } />
                <MainContent displayContent={ <RacerContainer /> }/>
            </div>
        );
    }
}

export default RacersPage;