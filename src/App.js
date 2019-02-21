import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Feedback from './components/Feedback';
import Weddings from './components/Weddings';
import Families from './components/Families';
import Couples from './components/Couples';
import Girls from './components/Girls';
import Animals from './components/Animals';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
        <div className = "App">
          <Switch>
            <Route exact path = { process.env.PUBLIC_URL + '/' } component = { Home } />
            <Route path = { process.env.PUBLIC_URL + '/about' } component = { About } />
            <Route exact path = { process.env.PUBLIC_URL + '/gallery' } component = { Gallery } />
            <Route path = { process.env.PUBLIC_URL + '/gallery/weddings' } component = { Weddings } />
            <Route path = { process.env.PUBLIC_URL + '/gallery/families' } component = { Families } />
            <Route path = { process.env.PUBLIC_URL + '/gallery/couples' } component = { Couples } />
            <Route path = { process.env.PUBLIC_URL + '/gallery/girls' } component = { Girls } />
            <Route path = { process.env.PUBLIC_URL + '/gallery/animals' } component = { Animals } />
            <Route path = { process.env.PUBLIC_URL + '/feedback' } component = { Feedback } />
            <Route path = { process.env.PUBLIC_URL + '/contacts' } component = { Contacts } />
          </Switch>
        </div>    
    );
  }
}

export default App;
