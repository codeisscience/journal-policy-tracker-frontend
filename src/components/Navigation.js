import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

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
            <Link to="/" exact>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/journal" exact>
              <Nav.Link>Journals</Nav.Link>
            </Link>
            <Link to="/manifesto" exact>
              <Nav.Link>Manifesto</Nav.Link>
            </Link>
            <Link to="/contact" exact>
              <Nav.Link>Contact</Nav.Link>
            </Link>
            <Link to="/about" exact>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
