import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Feedback from './components/Feedback';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
        <div className = "App">
          <Switch>
            <Route exact path = { process.env.PUBLIC_URL + '/' } component = { Home } />
            <Route path = { process.env.PUBLIC_URL + '/about' } component = { About } />
            <Route path = { process.env.PUBLIC_URL + '/gallery' } component = { Gallery } />
            <Route path = { process.env.PUBLIC_URL + '/feedback' } component = { Feedback } />
            <Route path = { process.env.PUBLIC_URL + '/contacts' } component = { Contacts } />
          </Switch>
        </div>    
    );
  }
}

export default App;
