import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Nav = styled(Link)`
  font-size: 1rem;
`;

const Navbar = () => (
  <Wrapper>
    <Title>Creative Notebook</Title>
    <div>
      <Nav>Notes</Nav>
    </div>
  </Wrapper>
);

export default Navbar;
