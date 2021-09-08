import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Note from 'blocks/Note';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const Personal = ({ personal }) => (
  personal ? <Wrapper className='p-4'>
    <Title>Personal Notes</Title>
    {personal && personal.map(note =>
      <Link to={'/notes/' + note.id}
        className='text-reset text-decoration-none'
        key={note.id}>
        <Note note={note} />
      </Link>
    )}
  </Wrapper> : <p className='text-center'>loading...</p>
);

export default Personal;
