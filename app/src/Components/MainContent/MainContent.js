import React, { Component } from 'react';

import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
                <div className='content'>
                    { this.props.displayContent }
                </div>
        );
    }
}

export default MainContent;