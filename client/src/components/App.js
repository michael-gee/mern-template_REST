import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import HomePage from './Pages/HomePage';
import AuthPage from './Pages/AuthPage';
import NotFoundPage from './Pages/NotFoundPage';
import TokenConfig from './Pages/TokenConfig';
import UserProfile from './Pages/UserProfile';

import actions from '../actions/authActions';

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontSize: '62.5%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    }
  }
};

class App extends Component {
  componentDidMount() {
    this.props.updateUserStatus(localStorage.getItem("AUTH_TOKEN"));
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/sign-in" component={AuthPage} />
            <Route path="/user-profile" component={UserProfile} />

            <Route path="/token" component={TokenConfig} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToPros({ auth }) {
  return {
    authenticated: auth.authenticated,
  }
}

export default connect(mapStateToPros, actions)(withStyles(styles)(App));
