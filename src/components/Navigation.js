import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" srcset="" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal" exact>
              <Nav.Link>Journals</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/manifesto" exact>
              <Nav.Link>Manifesto</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" exact>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" exact>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
