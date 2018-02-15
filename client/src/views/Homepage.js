import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui-next/Button';

import * as actions from '../actions';

class Homepage extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="homepage-container">
        <h1>Material-UI Homepage</h1>
        <h2>Inital State: {this.props.initial.message}</h2>

        <br/>
        <Button 
          variant="raised" 
          size="large" 
          color="primary"
          onClick={() => actions.changeInitialState('State Changed!')}
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