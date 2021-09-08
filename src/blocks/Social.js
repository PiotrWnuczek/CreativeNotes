import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import Category from './Category';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const Social = () => (
  <Wrapper className='p-4'>
    <Title>Social Notes</Title>
    <Accordion defaultActiveKey='1'>
      <Category category={{ id: '1' }} />
      <Category category={{ id: '2' }} />
    </Accordion>
  </Wrapper>
);

export default Social;
