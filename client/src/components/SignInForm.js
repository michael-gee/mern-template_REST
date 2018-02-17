import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui-next/TextField';

const styles = {
  formWrapper: {
    maxWidth: '800px',
    margin: '0 auto'
  }
};

class SignInForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div style={styles.formWrapper}>
          <div>
            <label>Email</label>
            <div>
              <TextField
                name="email"
                type="text"
                placeholder="example@example.com"
              />
            </div>
          </div>

          <div>
            <label>Password</label>
            <div>
              <TextField
                name="password"
                type="password"
              />
            </div>
          </div>

          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
      </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignInForm'
})(SignInForm);