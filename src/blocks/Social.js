import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { Accordion } from 'react-bootstrap';
//import Category from 'blocks/Category';
import Note from 'blocks/Note';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 2rem;
`;

const Social = ({ social }) => (
  social ? <Wrapper className='p-4'>
    <Title>Social Notes</Title>
    {/*<Accordion defaultActiveKey='1'>
      <Category category={{ id: '1' }} />
      <Category category={{ id: '2' }} />
    </Accordion>*/}
    {social && social.map(note =>
      <Link to={'/social/' + note.id}
        className='text-reset text-decoration-none'
        key={note.id}>
        <Note note={note} />
      </Link>
    )}
  </Wrapper> : <p className='text-center'>loading...</p>
);

export default Social;
