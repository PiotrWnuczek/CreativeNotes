import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';

const Note = ({ note }) => (
  <Card className='m-4'>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      {note.firstname && note.lastname && <Card.Subtitle>
        Created by: {note.firstname} {note.lastname}
      </Card.Subtitle>}
      {note.createdat && <Card.Text>
        Created at: {moment(note.createdat.toDate()).calendar()}
      </Card.Text>}
    </Card.Body>
  </Card>
);

export default Note;
