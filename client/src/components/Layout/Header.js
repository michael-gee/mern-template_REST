import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <header>
    <Link to="/" id="header-title">
      <h1>{props.title}</h1>
    </Link>

    <Link to="/log-in">
      <button id="header-btn">Log In</button>
    </Link>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
