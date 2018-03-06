import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from '../../actions';

class TokenConfig extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.search != "") {
      let token = this.props.location.search.replace('?token=', '');
      localStorage.setItem('AUTH_TOKEN', token);
      this.props.onUserAuthentication(true, this.props.history);
    }
  }

  render() {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default connect(null, actions)(TokenConfig);