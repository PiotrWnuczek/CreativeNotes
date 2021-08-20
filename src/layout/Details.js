import React from 'react';
import { Container } from 'react-bootstrap';

const Details = (props) => {
  const id = props.match.params.id

  return (
    <Container className='py-4'>
      <h1>Note Title {id}</h1>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <hr />
      <p>Author | Date</p>
    </Container>
  )
};

export default Details;
