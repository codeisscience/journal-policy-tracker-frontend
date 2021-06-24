import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img from "./assets/section-img.png";

function LandingSection() {
  return (
    <section className="section-one">
      <Container>
        <Row>
          <Col md={6}>
            <img src={Img} width={500} responsive />
          </Col>
          <Col md={6}>Some text</Col>
        </Row>
      </Container>
    </section>
  );
}

export default LandingSection;
