import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import RacersPage from './Components/RacersPage/RacersPage';
import TracksPage from './Components/TracksPage/TracksPage';



function App() {
  return (
      <Router>
        <div className='contentContainer'>
            <Header/>
            <Nav/>
            <div>
              <Switch>
                  <Route exact path='/' component={ RacersPage } />
                  <Route exact path='/tracks' component={ TracksPage } />

              </Switch>
                <img className='bgImage' src='./images/super-mario-kart.png' />
            </div>
        </div>
      </Router>
  );
}

export default App;
