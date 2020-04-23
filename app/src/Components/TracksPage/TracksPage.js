import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import TrackContainer from "../TrackContainer/TrackContainer";

import './TracksPage.css'

class TracksPage extends Component {
    render() {
        return (
            <div className='tracksContent'>
                <div className="pageHeaderBar">
                    <h2>Tracks</h2>
                </div>
                <MainContent displayContent={<TrackContainer />}/>
            </div>
        );
    }
}

export default TracksPage;