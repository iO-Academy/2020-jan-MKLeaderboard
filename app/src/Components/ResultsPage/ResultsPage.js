import React, { Component } from 'react';
import MainContent from "../MainContent/MainContent";
import PageHeaderBar from '../PageHeaderBar/PageHeaderBar';

class ResultsPage extends Component {
    state = {
        modalOptions: {
            modalHeading: 'Enter Race Results',
            modalContent: 'CreateRaceLogForm',
            modalButtonText: 'Enter Race Results'
        }
    }

    componentDidMount() {
        this.setState({ currentPage: 'ResultsPage' })
    }

    render() {
        return (
            <div className='resultsContent'>
                <PageHeaderBar pageTitle='Race Results' showUtilityBar={ true } modalOptions={ this.state.modalOptions } />
                <MainContent />
            </div>
        );
    }
}

export default ResultsPage;