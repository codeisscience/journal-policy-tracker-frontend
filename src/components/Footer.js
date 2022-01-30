import React from "react";
import '../styles/Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import { ImTwitter, ImMail, ImGithub } from "react-icons/im";
import { IoLogoSlack } from "react-icons/io";
import RocketImg from "../assets/rocket.webp";

function Footer() {
  return (
    <div style={{position: 'relative', bottom: '0',}}>
      <Container fluid >
        <Row className="footer-above">
          <Col xs={12} md={2}>
            <img src={RocketImg} height={130} width={69} />
          </Col>
          <Col xs={12} sm={12} md={3}>
            <h4>Useful links</h4>
            <a
                href="https://github.com/codeisscience"
                target="_blank"
                rel="noreferrer"
            >
              Contribute
            </a>
            <a
                href="https://codeisscience.github.io/manifesto/manifesto.html"
                target="_blank"
                rel="noreferrer"
            >
              Manifesto
            </a>
            <a href="#">Code of conduct</a>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <h4>Resources</h4>
            <a href="#">Authors</a>
            <a href="#">Open science</a>
            <a href="#">Contributors</a>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <h4>Contact Us</h4>
            <a
                href="mailto:contact@codeisscience.com"
                target="_blank"
                rel="noreferrer"
            >
              <ImMail /> Email
            </a>
            <a
                href="https://twitter.com/codeisscience"
                target="_blank"
                rel="noreferrer"
            >
              <ImTwitter />
              &nbsp;Twitter
            </a>
            <a
                href="https://github.com/codeisscience"
                target="_blank"
                rel="noreferrer"
            >
              <ImGithub /> GitHub
            </a>
            <a href="#">
              <IoLogoSlack /> Slack
            </a>
          </Col>
        </Row>
        <Row className="footer-below">
          <p>2021 Code is Science</p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
