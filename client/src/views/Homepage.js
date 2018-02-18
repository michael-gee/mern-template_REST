import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui-next/Button';

import * as actions from '../actions';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <h1>MERN Template Homepage</h1>
        <h2>Inital State: {this.props.initial.message}</h2>

        <br/>
        <Button 
          variant="raised" 
          size="large" 
          color="primary"
          onClick={() => this.props.changeInitialState('State Changed!')}
        >
          Change Initial State
        </Button>
        <br/> <br/>
        <Button 
          variant="raised" 
          size="large" 
          color="primary"
          href="/api/mock-data"
        >
          Get Backend Data from Express/MongoDB
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Homepage);