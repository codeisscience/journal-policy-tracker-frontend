import React from 'react';
import '../styles/Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/logo.webp';
import SearchBar from './Search';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Navbar.Brand href='#home'>
        <img src={Logo} alt='' srcSet='' height={81} width={150} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-evenly'>
        <Nav>
          <LinkContainer to='/' exact>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/journal' exact>
            <Nav.Link>Journals</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/manifesto' exact>
            <Nav.Link>Manifesto</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact' exact>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login' exact>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/signup' exact>
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
