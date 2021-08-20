import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

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
    <Card className='m-4'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='m-4'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </Wrapper>
);

export default List;
