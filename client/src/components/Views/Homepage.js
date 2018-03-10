import React from 'react';

const Homepage = props => (
  <div id="homepage-container">
    <h1>MERN Template Homepage</h1>

    <br />

    <a href="/api/mock-data">
      <button className="homepage-btn">Get Backend Data from Express/MongoDB</button>
    </a>
  </div>
);

export default Homepage;
