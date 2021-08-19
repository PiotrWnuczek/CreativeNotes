import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1rem;
`;

const Icon = styled(FaReact)`
  font-size: 5rem;
`;

const Start = () => (
  <Wrapper>
    <Title>Created by Piotr Wnuczek</Title>
    <Icon />
  </Wrapper>
);

export default Start;
