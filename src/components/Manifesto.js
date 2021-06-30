import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StandingImg from "./assets/human-2.png";
import SittingImg from "./assets/human-1.png";

const Manifesto = () => {
  return (
    <Container>
      <Row className="manifesto-header">
        <Col md={3}>
          <img src={StandingImg} height={220} />
        </Col>
        <Col md={6} className="manifesto">
          <h1>Manifesto</h1>
        </Col>
        <Col md={3}>
          <img src={SittingImg} height={220} />
        </Col>
      </Row>
    </Container>
  );
};

export default Manifesto;
