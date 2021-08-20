import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const Info = () => (
  <Wrapper className='p-4'>
    <Title>Info</Title>
    <Alert variant='secondary' className='m-4'>
      This is a alert—check it out!
    </Alert>
    <Alert variant='secondary' className='m-4'>
      This is a alert—check it out!
    </Alert>
  </Wrapper>
);

export default Info;
