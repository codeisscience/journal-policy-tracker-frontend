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
          <div>
            <ImMail size={150} />

            <p>
              <a href="#">contact@codeisscience.com</a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <ImGithub size={150} />
            <br />
            <p>
              <a href="#">GitHub</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="contact-card-two">
        <Col md={6}>
          <div>
            <ImTwitter size={150} />
            <p>
              <a href="#">@codeisscience</a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <FaGitter size={150} />
            <p>
              <a href="#">Gitter</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
