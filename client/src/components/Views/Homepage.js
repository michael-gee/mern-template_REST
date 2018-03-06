import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions';

const Homepage = props => (
  <div id="homepage-container">
    <h1>MERN Template Homepage</h1>
    <h2>Inital State: {props.message}</h2>

    <br />
    <button className="homepage-btn" onClick={() => props.changeInitialState('State Changed!')}>Change Initial State</button>
    <br /> <br />

    <a href="/api/mock-data">
      <button className="homepage-btn">Get Backend Data from Express/MongoDB</button>
    </a>
  </div>
);


Homepage.propTypes = {
  message: PropTypes.string.isRequired,
  changeInitialState: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    message: state.initial.message
  };
}

export default connect(mapStateToProps, actions)(Homepage);
