import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import actions from '../actions/authActions';

const styles = {
  formContainer: {
    maxWidth: '430px',
    padding: '0 15px',
    margin: '0 auto',
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: '1.6em',
    margin: '15px 0',
  },
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorShown: false,
      errorText: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      this.setState({ errorShown: true, errorText: '*** All input fields are required. ***' });
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      this.setState({ errorShown: true, errorText: '*** Must enter a valid email address. ***' });
      return false;
    } else if (password !== confirmPassword) {
      this.setState({ errorShown: true, errorText: '*** Password inputs must match. ***' });
      return false;
    }

    this.setState({ errorShown: false, errorText: '' });

    this.props.registerUser(name, email, password);
  }

  renderErrorShown(classes) {
    if (this.state.errorShown) {
      return <div className={classes.errorText}>{this.state.errorText}</div>
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.formContainer}>
        <h2 className={classes.formTitle}>Register</h2>

        <TextField
          name="name"
          label="Name"
          type="text"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />
        <TextField
          name="email"
          label="Email"
          type="text"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          margin="normal"
          required
          fullWidth
          onChange={this.onInputChange}
        />

        {this.renderErrorShown(classes)}

        <Button
          variant="raised"
          size="large"
          color="primary"
          className={classes.formButton}
          onClick={this.onFormSubmit}
        >Register
        </Button>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, actions)(withStyles(styles)(RegisterForm));
