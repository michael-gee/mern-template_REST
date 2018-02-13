import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Homepage from '../views/Homepage';
import { Secondary } from '../views/Secondary';
import NotFoundPage from '../views/NotFoundPage';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="container">
            <Header title="MERN Template" />
            
            <Switch>
              <Route exact path="/" component={Homepage} />

              <Route path="/secondary" component={Secondary} />
              <Route component={NotFoundPage} />
            </Switch>

          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
