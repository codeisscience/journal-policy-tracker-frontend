import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./assets/logo.png";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="CodeisScience" srcset="" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/journal'>Journals</Nav.Link>
              <Nav.Link href='/manifesto'>Manifesto</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
