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
              <h1>Code == Science</h1>
              <p>
                If software is required to perform science, it stands to reason
                that errors in your software mean errors in your science.
              </p>
            </Col>
            <Col md={6}>
              <h1>Possible Solution?</h1>
              <p>
                Scientific code needs to be peer reviewed, and ideally open
                source.
              </p>{" "}
              <p>
                That’s easier said than done. Getting there requires awareness,
                culture shift, and adherence to best practices.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingSection;
