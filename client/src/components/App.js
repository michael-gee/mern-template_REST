import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../actions';

import Header from './Layout/Header';

import Homepage from './Views/Homepage';
import AuthPage from './Views/AuthPage';
import UserProfile from './Views/UserProfile';
import TokenConfig from './Views/TokenConfig';
import NotFoundPage from './Views/NotFoundPage';

import '../styles/global.css';

class App extends Component {
  componentDidMount() {
    this.props.updateUserStatus(localStorage.getItem("AUTH_TOKEN"));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header title="MERN Template" />

          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/log-in" component={AuthPage} />
            <Route path="/user-profile" component={UserProfile} />

            <Route path="/token" component={TokenConfig} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

function mapStateToPros({ auth }) {
  return {
    authenticated: auth.authenticated
  }
}

export default connect(mapStateToPros, actions)(App);
