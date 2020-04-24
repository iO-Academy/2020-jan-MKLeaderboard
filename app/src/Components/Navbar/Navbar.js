import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <ul className='nav-wrapper'>
                    <li><Link to='/' className='nav-link first'>Racers</Link></li>
                    <li><Link to='/tracks' className='nav-link'>Tracks</Link></li>
                    <li><Link to='/results' className='nav-link'>Results</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;