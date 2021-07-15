import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import Logo from "./assets/logo.png";

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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#journals">
              Journals
            </Nav.Link>
            <Nav.Link href="#manifesto">Manifesto</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#blog">Contact</Nav.Link>
            <Nav.Link href="#blog">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <input type="text" placeholder="Search" />
        </Form>
      </Navbar>
    </>
  );
}

export default Navigation;
