import React from 'react';
import { Link } from 'react-router-dom';

export const Secondary = () => {
  return (
    <div>
      <h1>Secondary Page</h1>
      <Link to="/">
        Back To Homepage
      </Link>
    </div>
  );
}