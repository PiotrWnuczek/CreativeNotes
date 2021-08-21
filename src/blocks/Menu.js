import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const Topbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to='/'>CreativeNootebook</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='mx-lg-3'>
          <Nav.Link as={NavLink} to='/create'>New Note</Nav.Link>
          <Nav.Link as={NavLink} to='/logout'>Log Out</Nav.Link>
          <Nav.Link as={NavLink} to='/signup'>Sign Up</Nav.Link>
          <Nav.Link as={NavLink} to='/signin'>Sign In</Nav.Link>
        </Nav>
        <Button as={NavLink} to='/'>PW</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Topbar;
