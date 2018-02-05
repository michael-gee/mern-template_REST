import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import '../styles/view_styles/Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <h1>Homepage</h1>

        <h2>Inital State: {this.props.initial.message}</h2>

        <button onClick={this.props.changeInitialState} className="homepage-btn">Change Initial State</button>

        <a href="/api/mock-data" style={{textDecoration: 'none'}}>
          <button className="homepage-btn">Get Backend Data from Express/MongoDB</button>
        </a>

        <br/>

        <Link to="/secondary">
          Secondary Route Page
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Homepage);