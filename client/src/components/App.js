import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../actions';

import Header from './Layout/Header/Header';

import HomePage from './Views/HomePage/HomePage';
import AuthPage from './Views/AuthPage/AuthPage';
import NotFoundPage from './Views/NotFoundPage/NotFoundPage';
import TokenConfig from './Views/TokenConfig/TokenConfig';
import UserProfile from './Views/UserProfile/UserProfile';

import './App.css';

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
            <Route exact path="/" component={HomePage} />

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
