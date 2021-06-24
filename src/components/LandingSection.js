import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img from "./assets/section-img.png";

function LandingSection() {
  return (
    <>
      <section className="section-one">
        <Container>
          <Row>
            <Col md={6}>
              <img src={Img} width={500} responsive />
            </Col>
            <Col md={6}>
              <h1>Premise</h1>
              <h2>Science is often computing</h2>
              <p>
                Much of modern science involves code these days, in large part
                due to the amount of data available - it would be almost
                impossible to analyse without computational assistance.
              </p>
              <h2>Science requires peer review</h2>
              <p>
                One of the basic prerequisites for any published scientific
                results is that it be reviewed by peers, to ensure the research
                and conclusions are valid.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-two">
        <Container>
          <Row>
            <Col md={6}>
              <img src={Img} width={500} responsive />
            </Col>
            <Col md={6}>
              <h1>Premise</h1>
              <h2>Science is often computing</h2>
              <p>
                Much of modern science involves code these days, in large part
                due to the amount of data available - it would be almost
                impossible to analyse without computational assistance.
              </p>
              <h2>Science requires peer review</h2>
              <p>
                One of the basic prerequisites for any published scientific
                results is that it be reviewed by peers, to ensure the research
                and conclusions are valid.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingSection;
