/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Header.css';
import { Button, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div className='header'>
      <Jumbotron fluid>
        <Button fluid>Read and Sign the Manifesto</Button>
      </Jumbotron>
    </div>
  );
}

export default Header;
