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
            <img src={RocketImg} alt='rocket' height={130} width={69} />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Useful Links</h4>
          <li className='footer-link'>
            <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
              Contribute
            </a>
          </li>
          <li className='footer-link'>
            <a
              href='https://codeisscience.github.io/manifesto/manifesto.html'
              target='_blank'
              rel='noreferrer'
            >
              Manifesto
            </a>
          </li>
          <li className='footer-link'>
            <a href='#'>Code of conduct</a>
          </li>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Resources</h4>
          <li className='footer-link'>
            <a href='#'>Authors</a>
          </li>
          <li className='footer-link'>
            <a href='#'>Open science</a>
          </li>
          <li className='footer-link'>
            <a href='#'>Contributors</a>
          </li>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h4>Contact Us</h4>

          <li className='footer-link'>
            <a href='mailto:contact@codeisscience.com' target='_blank' rel='noreferrer'>
            <ImMail className='email-icon icons'/> Email
            </a>
          </li>
          <li className='footer-link'>
            <a href='https://twitter.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImTwitter className='twitter-icon icons'/>
              &nbsp;Twitter
            </a>
          </li>
          <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
            <ImGithub className='github-icon icons'/> GitHub
          </a>

          <li className='footer-link'>
            <a href='#'>
              <IoLogoSlack className='slack-icon icons'/> Slack
            </a>
          </li>
        </Col>
      </Row>
      <Row className='footer-below'>
        <p>Copyright © {new Date().getFullYear()} Code is Science</p>
      </Row>
    </Container>
  );
}

export default Footer;
