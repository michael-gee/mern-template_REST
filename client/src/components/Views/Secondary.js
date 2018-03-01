import React from 'react';
import { Link } from 'react-router-dom';

const Secondary = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Secondary Page</h1>
    <Link to="/">
      Back To Homepage
    </Link>
  </div>
);

export default Secondary;
