import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import StandingImg from "./assets/human-2.png";
import SittingImg from "./assets/human-1.png";
import ImgOne from "./assets/manifesto-img-1.png";
import WalkingImg from "./assets/walking-man.png";
import PeersImg from "./assets/peers.png";
import HandsIcon from "./assets/hands-icon.png";
import { ImTwitter, ImMail, ImGithub } from "react-icons/im";

const Manifesto = () => {
  return (
    <Container>
      <Row className="manifesto-header">
        <Col xs={12} sm={12} md={3}>
          <Image src={StandingImg} height={220} />
        </Col>
        <Col xs={12} sm={12} md={6} className="manifesto">
          <h1>Manifesto</h1>
        </Col>
        <Col md={3}>
          <Image src={SittingImg} height={220} />
        </Col>
      </Row>
      <Row className="manifesto-section-one">
        <Col xs={12} sm={12} md={6}>
          <Image src={ImgOne} fluid />
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
      <Row className="manifesto-support">
        <h1>I want to express my support for the manifesto! Tell me how</h1>
        <Col md={4}>
          <Image src={WalkingImg} height={140} />
          <p>Sign the manifesto as an individual</p>
        </Col>
        <Col md={4}>
          <Image src={PeersImg} height={140} />
          <p>
            Sign the manifesto as an organisation or institution. Please make
            sure you have authority to sign on behalf of your organisation
            before you sign on behalf of an organisation.
          </p>
        </Col>
        <Col md={4}>
          <img src={HandsIcon} height={140} />
          <p>
            We’re particularly interested in adding logos and links indicating
            organisational support from publishers, funders, and research
            institutions.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>How can I contribute?</h2>
          <ul>
            <li>Sign the manifesto and share with all your friends!</li>
            <li>Add links to your personal and institutional sites.</li>
            <li>
              You can also look at the issues on GitHub and see if there’s
              anything else you can pick up. You can also look at our roadmap to
              get an understanding of our timeline.
            </li>
          </ul>
        </Col>
        <Col md={6} className="manifesto-contact">
          <h2>Contact</h2>
          <a href="#">
            <ImTwitter />
            &nbsp;Twitter: @codeisscience
          </a>
          <a href="#">
            <ImMail /> Email: contact@codeisscience.com
          </a>
          <a href="#">
            <ImGithub /> GitHub: You can also create issues on the manifesto
            repository
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Manifesto;
