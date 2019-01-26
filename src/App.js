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
            <Route exact path = "/" component = { Home } />
            <Route path = "/about" component = { About } />
            <Route path = "/gallery" component = { Gallery } />
            <Route path = "/feedback" component = { Feedback } />
            <Route path = "/contacts" component = { Contacts } />
          </Switch>
        </div>    
    );
  }
}

export default App;
