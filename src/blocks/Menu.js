import React from 'react';
import { connect } from 'react-redux';
import { signout } from 'logic/authActions';
import { Link, NavLink } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = ({ signout, auth, profile }) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to='/'>CreativeNootebook</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='mx-lg-3'>
          {!auth.uid && <Nav.Link as={NavLink} to='/signup'>Sign Up</Nav.Link>}
          {!auth.uid && <Nav.Link as={NavLink} to='/signin'>Sign In</Nav.Link>}
          {auth.uid && <Nav.Link as={NavLink} to='/create'>New Note</Nav.Link>}
          {auth.uid && <Nav.Link onClick={signout}>Sign Out</Nav.Link>}
        </Nav>
        {auth.uid && <Button as={NavLink} to='/'>{profile.initials}</Button>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const mapDispatchToPorps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToPorps)
  (Menu);
