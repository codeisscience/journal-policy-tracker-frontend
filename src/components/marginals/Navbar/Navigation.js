import React from 'react';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../../../assets/logo.webp';
import { SearchBar } from '../index';

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
      style={{ paddingLeft: '30px', paddingRight: '30px' }}
      fixed='top'
    >
      <Navbar.Brand href='#home'>
        <img src={Logo} alt='code is science' srcSet='' height={81} width={150} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-evenly'>
        <Nav>
          <LinkContainer to='/' exact>
            <Nav.Link active={false}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/journal' exact>
            <Nav.Link active={false}>Journals</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/manifesto' exact>
            <Nav.Link active={false}>Manifesto</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact' exact>
            <Nav.Link active={false}>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login' exact>
            <Nav.Link active={false}>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/signup' exact>
            <Nav.Link active={false}>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
