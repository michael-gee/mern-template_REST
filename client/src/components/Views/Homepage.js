import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <h1>MERN Template Homepage</h1>
        <h2>Inital State: {this.props.initial.message}</h2>

        <br/>
        <button className="homepage-btn" onClick={() => this.props.changeInitialState('State Changed!')}>Change Initial State</button>
        <br/> <br/>
        
        <a href="/api/mock-data">
          <button className="homepage-btn">Get Backend Data from Express/MongoDB</button>
        </a>
      </div>
    );
  }
}

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Homepage);