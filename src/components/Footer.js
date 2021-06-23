import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ order: "last" }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: "first" }}>Third, but first</Col>
      </Row>
      <Row className="footer-below">
        <p>2021 Code is Science</p>
      </Row>
    </Container>
  );
}

export default Footer;
