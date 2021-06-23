import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid>
      <Row className="footer-above">
        <Col xs>
          <h4>Useful links</h4>
          <a href="#">Contribute</a>
          <a href="#">Manifesto</a>
          <a href="#">Code of conduct</a>
        </Col>
        <Col xs>
          <h4>Resources</h4>
        </Col>
        <Col xs>
          <h4>Contact Us</h4>
        </Col>
      </Row>
      <Row className="footer-below">
        <p>2021 Code is Science</p>
      </Row>
    </Container>
  );
}

export default Footer;
