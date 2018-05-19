import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const HomeBtn = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const Homepage = props => (
  <Container>
    <h1>MERN Template Homepage</h1>

    <br />

    <a href="/api/mock-data">
      <HomeBtn>Get Backend Data from Express/MongoDB</HomeBtn>
    </a>
  </Container>
);

export default Homepage;
