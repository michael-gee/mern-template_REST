import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  function renderHeaderBtn() {
    if(props.authenticated) {
      return (
        <Link to="/user-profile">
          <button className="header-btn">Profile</button>
        </Link>
      );
    } else {
      return (
        <Link to="/log-in">
          <button className="header-btn">Log In</button>
        </Link>
      );
    }
  }

  return (
    <header>
      <Link to="/" id="header-title">
        <h1>{props.title}</h1>
      </Link>

      {renderHeaderBtn()}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
