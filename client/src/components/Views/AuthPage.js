import React from 'react';
import { Link } from 'react-router-dom';

const Secondary = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Auth Page</h1>
    <Link to="/">
      Back To Homepage
    </Link>

    <br/>
    <a href="/auth/google">Google Login</a>
    <br/>
    <a href="/auth/github">Github Login</a>
    <br/>
    <a href="/auth/facebook">Facebook Login</a>
  </div>
);

export default Secondary;
