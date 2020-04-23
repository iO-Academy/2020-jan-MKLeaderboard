import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import RacerContainer from "../RacerContainer/RacerContainer";
import PageHeaderBar from '../PageHeaderBar/PageHeaderBar';

class RacersPage extends Component {
    render() {
        return (
            <div className='racersContent'>
                <PageHeaderBar pageTitle='Racers' showUtilityBar={true} />
                <MainContent displayContent={<RacerContainer />}/>
            </div>
        );
    }
}

export default RacersPage;