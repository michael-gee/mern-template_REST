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

          <br /><br />
          <a href="/auth/github">Github Login</a><br />
  
          <br /><br />
          <a href="/auth/facebook">Facebook Login</a><br />
          
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
