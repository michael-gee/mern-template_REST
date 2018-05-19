import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderEL = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  height: 75px;
  margin-bottom: 25px;
  padding: 0 25px;
`;

const HeaderTitle = styled(Link)`
  text-align: center;
  margin-right: auto;
  color: white;
  text-decoration: none;
  font-size: 3em;
`;

const HeaderBtn = styled.button`
  padding: 10px 25px;
  background-color: white;
  border-radius: 5px;
  border: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = props => {
  function renderHeaderBtn() {
    if(props.authenticated) {
      return (
        <Link to="/user-profile">
          <HeaderBtn>Profile</HeaderBtn>
        </Link>
      );
    } else {
      return (
        <Link to="/log-in">
          <HeaderBtn>Log In</HeaderBtn>
        </Link>
      );
    }
  }

  return (
    <HeaderEL>
      <HeaderTitle to="/">{props.title}</HeaderTitle>

      {renderHeaderBtn()}
    </HeaderEL>
  );
}

export default Header;
