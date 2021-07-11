import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImTwitter, ImMail, ImGithub, FaFacebook } from "react-icons/im";
import RocketImg from "./assets/rocket.png";

function Footer() {
  return (
    <Container fluid>
      <Row className="footer-above">
        <Col xs md={2}>
          <img src={RocketImg} height={130} />
        </Col>
        <Col xs md={3}>
          <h4>Useful links</h4>
          <a href="#">Contribute</a>
          <a href="#">Manifesto</a>
          <a href="#">Code of conduct</a>
        </Col>
        <Col xs md={3}>
          <h4>Resources</h4>
          <a href="#">Authors</a>
          <a href="#">Open science</a>
          <a href="#">Contributors</a>
        </Col>
        <Col xs md={3}>
          <h4>Contact Us</h4>
          <a href="#">
            <ImMail /> Email
          </a>
          <a href="#">
            <ImTwitter />
            &nbsp;Twitter
          </a>
          <a href="#">
            <ImGithub /> GitHub
          </a>
          <a href="#">Slack</a>
        </Col>
      </Row>
      <Row className="footer-below">
        <p>2021 Code is Science</p>
      </Row>
    </Container>
  );
}

export default Footer;
