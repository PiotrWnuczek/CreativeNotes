import React from 'react';
import styled from 'styled-components';
import Item from 'blocks/Item';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const List = ({ notes }) => (
  <Wrapper className='p-4'>
    <Title>Notes</Title>
    {notes && notes.map(
      note => <Item note={note} key={note.id} />
    )}
  </Wrapper>
);

export default List;
