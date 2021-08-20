import React from 'react';
import styled from 'styled-components';
import Item from 'blocks/Item';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const List = () => (
  <Wrapper className='p-4'>
    <Title>Notes</Title>
    <Item />
    <Item />
  </Wrapper>
);

export default List;
