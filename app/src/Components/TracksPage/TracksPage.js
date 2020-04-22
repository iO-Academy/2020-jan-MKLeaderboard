import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import TrackContainer from "../TrackContainer/TrackContainer";

import './TracksPage.css'

class TracksPage extends Component {
    render() {
        return (
            <div className='tracksContent'>
                <h1>Tracks</h1>
                <MainContent displayContent={<TrackContainer />}/>
            </div>
        );
    }
}

export default TracksPage;