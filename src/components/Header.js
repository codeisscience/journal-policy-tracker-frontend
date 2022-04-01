/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Header.css';
import { Button, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import img from '../assets/bg.webp';

function Header() {
  return (
    <div className='header'>
      <img src={img} alt='' className='header-img' />
      <Jumbotron fluid>
        <Button fluid>Read and Sign the Manifesto</Button>
      </Jumbotron>
    </div>
  );
}

export default Header;
