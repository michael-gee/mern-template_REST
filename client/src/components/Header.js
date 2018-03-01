import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <header>
    <h1 id="header-title">{props.title}</h1>

    <Link to="/secondary">
      <button id="header-btn">Secondary</button>
    </Link>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
