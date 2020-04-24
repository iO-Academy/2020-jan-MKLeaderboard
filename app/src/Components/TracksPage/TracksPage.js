import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import TrackContainer from "../TrackContainer/TrackContainer";
import PageHeaderBar from '../PageHeaderBar/PageHeaderBar';

class TracksPage extends Component {
    render() {
        return (
            <div className='tracksContent'>
                <PageHeaderBar pageTitle='Tracks' showUtilityBar={false} />
                <MainContent displayContent={<TrackContainer />}/>
            </div>
        );
    }
}

export default TracksPage;