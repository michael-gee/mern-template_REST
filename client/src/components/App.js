import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/index.css';

import Header from './Header';
import Homepage from '../views/Homepage';
import { Secondary } from '../views/Secondary';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="MERN Template" />
          
          <Route exact path="/" component={Homepage} />
          
          <Route path="/secondary" component={Secondary} />
        </div>
      </Router>
    );
  }
}

export default App;
