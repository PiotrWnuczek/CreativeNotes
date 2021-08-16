import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333333;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333333;
`;

const Header = ({ title, text }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Wrapper>
);

export default Header;
