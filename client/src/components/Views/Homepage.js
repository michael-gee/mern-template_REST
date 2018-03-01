import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions';

const Homepage = props => (
  <div id="homepage-container">
    <h1>MERN Template Homepage</h1>
    <h2>Inital State: {props.initial.message}</h2>

    <br />
    <button className="homepage-btn" onClick={() => props.changeInitialState('State Changed!')}>Change Initial State</button>
    <br /> <br />

    <a href="/api/mock-data">
      <button className="homepage-btn">Get Backend Data from Express/MongoDB</button>
    </a>
  </div>
);


Homepage.propTypes = {
  initial: PropTypes.shape.isRequired,
  changeInitialState: PropTypes.func.isRequired,
};

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Homepage);
