import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../actions';

class AuthPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Auth Page</h1>

        <br />

        <button onClick={() => this.props.onLocalSignUp(null, null, this.props.history)}>Local Auth</button>

        <br/><br/>

        <div id="social-media-links">
          <a href="/auth/google">Google Login</a><br />
          <button onClick={() => this.props.onSocialLogIn('github', this.props.history)}>Google Loogin</button>
          <br /><br />
          <a href="/auth/github">Github Login</a><br />
          <button onClick={() => this.props.onSocialLogIn('github', this.props.history)}>Github Login</button>
          <br /><br />
          <a href="/auth/facebook">Facebook Login</a><br />
          <button onClick={() => this.props.onSocialLogIn('facebook', this.props.history)}>Facebook Login</button>
          <br /><br />
        </div>

        <br /><br />

        <Link to="/">
          Back To Homepage
        </Link>

      </div>
    );
  }
}

export default connect(null, actions)(AuthPage);
