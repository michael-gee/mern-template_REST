import React, { Component } from 'react';

import SignInForm from '../components/SignInForm';

class AuthPage extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <h1>Auth Page</h1>
        <SignInForm />
      </div>
    );
  }
}

export default AuthPage;