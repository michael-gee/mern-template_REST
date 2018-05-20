import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SignInForm from '../SignInForm';
import RegisterForm from '../RegisterForm';

const styles = {
  authContainer: {
    maxWidth: '600px',
    backgroundColor: '#FAFAFA',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, .2)',
    padding: '0 15px 15px 15px',
    margin: '25px auto',
  },
  authTabs: {
    width: '100%',
    margin: '10px 0 25px 0',
  },

  '@media screen and (max-width: 600px)': {
    authContainer: {
      width: '100%',
      margin: '0',
      padding: '0',
      boxShadow: 'none',
      border: 'none',
    },
    authTabs: {
      margin: '0',
    },
  }
};

class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  onTabChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.authContainer}>
        <Tabs
          className={classes.authTabs}
          value={this.state.value}
          onChange={this.onTabChange.bind(this)}
          indicatorColor="primary"
          fullWidth
          centered
        >
          <Tab label="Sign In" />
          <Tab label="Register" />
        </Tabs>
        {this.state.value === 0 && <SignInForm />}
        {this.state.value === 1 && <RegisterForm />}
      </div>
    );
  }
}

AuthPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthPage);
