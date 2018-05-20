import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Icon from './Icon';
import { GOOGLE, FACEBOOK } from './IconList';

const styles = {
  formContainer: {
    maxWidth: '430px',
    padding: '0 15px',
    margin: '25px auto',
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '2em',
  },
  formButton: {
    margin: '25px auto',
    display: 'flex',
    minWidth: '300px',
  },
  btnLink: {
    textDecoration: 'none',
  },
  btnText: {
    marginLeft: '10px',
  },
  dividerText: {
    textAlign: 'center',
    fontSize: '1.6em',
  },
  googleBtn: {
    backgroundColor: '#F32E06',
    color: 'white',
    '&:hover': {
      backgroundColor: '#f55737',
    },
  },
  facebookBtn: {
    backgroundColor: '#3c66c4',
    color: 'white',
    '&:hover': {
      backgroundColor: '#667dbe',
    },
  },
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    console.log(email, password);

    /*  if (username && password) {
      dispatch(userActions.login(username, password));
    } */
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.formContainer}>
        <h2 className={classes.formTitle}>Sign In</h2>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="text"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />

        <Button
          variant="raised"
          size="large"
          color="primary"
          className={classes.formButton}
          onClick={this.onFormSubmit}
        >Sign In
        </Button>

        <h3 className={classes.dividerText}>or sign In through social media...</h3>

        <a href="/auth/google" className={classes.btnLink}>
          <Button
            variant="raised"
            size="large"
            className={`${classes.formButton} ${classes.googleBtn}`}>
            <Icon icon={GOOGLE} />
            <span className={classes.btnText}>Sign In with Google</span>
          </Button>
        </a>
        <a href="/auth/facebook" className={classes.btnLink}>
          <Button
            variant="raised"
            size="large"
            className={`${classes.formButton} ${classes.facebookBtn}`}>
            <Icon icon={FACEBOOK} />
            <span className={classes.btnText}>Sign In with Facebook</span>
          </Button>
        </a>
      </div>
    );
  }
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInForm);