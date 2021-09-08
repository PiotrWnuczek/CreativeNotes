import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Element from 'blocks/Element';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const Private = ({ notes }) => (
  notes ? <Wrapper className='p-4'>
    <Title>Private Notes</Title>
    {notes && notes.map(note =>
      <Link to={'/notes/' + note.id}
        className='text-reset text-decoration-none'
        key={note.id}>
        <Element note={note} />
      </Link>
    )}
  </Wrapper> : <p className='text-center'>loading...</p>
);

export default Private;
