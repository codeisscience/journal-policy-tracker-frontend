/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { Button, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

function Header() {

  return (
    <div className='header'>
      <Jumbotron fluid>
        <Link to='/manifesto'>
          <Button fluid="true">Read and Sign the Manifesto</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Header;
