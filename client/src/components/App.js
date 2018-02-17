import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Homepage from '../views/Homepage';
import { Secondary } from '../views/Secondary';
import AuthPage from '../views/AuthPage';
import NotFoundPage from '../views/NotFoundPage';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header title="MERN Template" />
          
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/secondary" component={Secondary} />
            <Route path="/auth" component={AuthPage} />
            <Route component={NotFoundPage} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
