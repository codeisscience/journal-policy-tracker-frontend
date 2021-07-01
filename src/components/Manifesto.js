import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StandingImg from "./assets/human-2.png";
import SittingImg from "./assets/human-1.png";
import ImgOne from "./assets/manifesto-img-1.png";

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
      <Row className="manifesto-section-one">
        <Col md={6}>
          <img src={ImgOne} width="500" />
          <p>
            Code is Science - a manifesto for anyone who deals with code in a
            scientific scenario
          </p>
        </Col>
        <Col md={6}>
          <h1>Code is Science Manifesto</h1>
          <p className="manifesto-text">
            Through working with scientific code, we agree that scientific code
            needs to be treated as a genuine research output. For this reason we
            have created a manifesto, which will allow both individuals and
            organisations to sign up and agree to make genuine efforts to both
            make their own scientific code open, as well as sharing the
            manifesto mission with others.
          </p>
        </Col>
      </Row>
      <Row>
        <h1>Want to contribute</h1>
        <Col md={4}>
          <img src={ImgOne} width="500" />
          <p>
            Code is Science - a manifesto for anyone who deals with code in a
            scientific scenario
          </p>
        </Col>
        <Col md={4}>
          <img src={ImgOne} width="500" />
          <p>
            Code is Science - a manifesto for anyone who deals with code in a
            scientific scenario
          </p>
        </Col>
        <Col md={4}>
          <img src={ImgOne} width="500" />
          <p>
            Code is Science - a manifesto for anyone who deals with code in a
            scientific scenario
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Manifesto;
