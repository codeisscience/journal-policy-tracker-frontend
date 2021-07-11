import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        Ideas? Comments? Critiques? Want to help out? Here’s how to get in
        contact:
      </p>
      <Row className="contact-card-one">
        <Col md={6}>
          <div>
            <a href="#">contact@codeisscience.com</a>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <a href="#">GitHub</a>
          </div>
        </Col>
      </Row>
      <Row className="contact-card-two">
        <Col md={6}>
          <div>
            <a href="#">@codeisscience</a>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <a href="#">Gitter</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
