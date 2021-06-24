import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div className="header">
      <Container fluid>
        <button>Read and Sign the Manifesto</button>
      </Container>
    </div>
  );
}

export default Header;
