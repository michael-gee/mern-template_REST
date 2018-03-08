import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const UserProfile = (props) => {
  return (
    <div>
      <h1>Profile Page</h1>

      <button onClick={() => props.onUserAuthentication(false, props.history)}>Log Out</button>

      <br/><br/>

      <a href="/auth/current-user">Current User</a>
    </div>
  );
}

export default connect(null, actions)(UserProfile);