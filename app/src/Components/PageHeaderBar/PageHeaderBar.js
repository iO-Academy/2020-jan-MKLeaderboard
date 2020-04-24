import React from 'react';
import UtilityBar from '../UtilityBar/UtilityBar';
import './pageHeaderBar.css';

const PageHeaderBar = ({ pageTitle, showUtilityBar }) => {
    return (
        <div className="pageHeaderBar">
            <h2>{ pageTitle }</h2>
            { showUtilityBar ? <UtilityBar /> : '' }
        </div>
    )
}

export default PageHeaderBar;