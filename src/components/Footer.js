/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
import { IoLogoSlack } from 'react-icons/io';
import RocketImg from '../assets/rocket.webp';

function Footer() {
  return (
    <Container fluid>
      <Row className='footer-above'>
        <Col xs={12} md={3}>
            <img src={RocketImg} alt='' height={130} width={69} />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Useful Links</h4>
          <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
            Contribute
          </a>
          <a
            href='https://codeisscience.github.io/manifesto/manifesto.html'
            target='_blank'
            rel='noreferrer'
          >
            Manifesto
          </a>
          <a href='#'>Code of conduct</a>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Resources</h4>
          <a href='#'>Authors</a>
          <a href='#'>Open science</a>
          <a href='#'>Contributors</a>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Contact Us</h4>
          <a href='mailto:contact@codeisscience.com' target='_blank' rel='noreferrer'>
            <ImMail className='email-icon icons'/> Email
          </a>
          <a href='https://twitter.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImTwitter className='twitter-icon icons'/> 
            Twitter
          </a>
          <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImGithub className='github-icon icons'/> GitHub
          </a>
          <a href='#'>
            <IoLogoSlack className='slack-icon icons'/> Slack
          </a>
        </Col>
      </Row>
      <Row className='footer-below'>
        <p>Copyright © {new Date().getFullYear()} Code is Science</p>
      </Row>
    </Container>
  );
}

export default Footer;
