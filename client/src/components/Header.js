import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  return (
    <header>
      <h1 id="header-title">{props.title}</h1>

      <Link to="/secondary">
        <button id="header-btn">Secondary</button>
      </Link>
    </header>
  );

}