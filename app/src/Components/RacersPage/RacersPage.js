import React, { Component } from 'react';
import UtilityBar from '../UtilityBar/UtilityBar';
import MainContent from "../MainContent/MainContent";
import RacerContainer from "../RacerContainer/RacerContainer";
import './RacersPage.css';

class RacersPage extends Component {
    render() {
        return (
            <div className='racersContent'>
                <div className="pageHeaderBar">
                    <h2>Racers</h2>
                    <UtilityBar />
                </div>
                <MainContent displayContent={<RacerContainer />}/>
            </div>
        );
    }
}

export default RacersPage;