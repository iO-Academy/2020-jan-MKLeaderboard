import React from 'react';
import UtilityBar from '../UtilityBar/UtilityBar';
import './pageHeaderBar.css';

const PageHeaderBar = ({ pageTitle, showUtilityBar, modalOptions }) => {
    return (
        <div className="pageHeaderBar">
            <h2>{ pageTitle }</h2>
            { showUtilityBar ? <UtilityBar modalOptions={ modalOptions } /> : '' }
        </div>
    )
}

export default PageHeaderBar;