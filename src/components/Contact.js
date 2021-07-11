import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImTwitter, ImMail, ImGithub } from "react-icons/im";
import { FaGitter } from "react-icons/fa";

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
          <div className="contact-card">
            <ImMail size={150} />
            <p>
              <a href="#">contact@codeisscience.com</a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-card">
            <ImGithub size={150} />
            <p>
              <a href="#">GitHub</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="contact-card-two">
        <Col md={6}>
          <div className="contact-card">
            <ImTwitter size={150} />
            <p>
              <a href="#">@codeisscience</a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-card">
            <FaGitter size={150} />
            <p>
              <a href="#">Gitter</a>
            </p>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Contact;
