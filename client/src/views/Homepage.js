import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../actions';
import '../styles/view_styles/Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <h1>Material-UI Homepage</h1>

        <h2>Inital State: {this.props.initial.message}</h2>

        <RaisedButton 
          onClick={this.props.changeInitialState} 
          label="Change Initial State"
          backgroundColor="red"
          labelStyle={{
            color: 'white',
            fontSize: '1.4em',
            display: 'flex',
            paddingTop: '10px'
          }}
          style={{
            margin: '10px 0',
            height: '50px'
          }} 
        />

        <br />

        <RaisedButton 
          href="/api/mock-data" 
          label="Get Backend Data from Express/MongoDB"
          backgroundColor="red"
          labelStyle={{
            color: 'white',
            fontSize: '1.4em',
            display: 'flex',
            paddingTop: '10px'
          }}
          style={{
            margin: '10px 0',
            height: '50px'
          }}
        />
      </div>
    );
  }
}

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Homepage);