import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/authActions';

class UserProfile extends Component {
  componentDidMount() {
    if(this.userData === undefined) {
      this.props.getCurrentUser();
    }
  }

  renderUserProfile() {
    if(this.props.userData === undefined) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <ul>
            <li>{this.props.userData.displayName}</li>
            <li>{this.props.userData.email}</li>
            <li><img src={this.props.userData.photoURL} alt="Current User" /></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>

        {this.renderUserProfile()}

        <button onClick={() => this.props.onUserAuthentication(false, this.props.history)}>Log Out</button>

        <br /><br />

        <button onClick={this.props.getCurrentUser}>Get Current User</button>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { userData: auth.userData };
}

export default connect(mapStateToProps, actions)(UserProfile);