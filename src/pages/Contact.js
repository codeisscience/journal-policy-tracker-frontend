/* eslint-disable react/function-component-definition */
import React from 'react';
import '../styles/Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
import { FaGitter } from 'react-icons/fa';

const Contact = () => (
  <Container className='contact-padding'>
    <h1>Contact Us</h1>
    <p>Ideas? Comments? Critiques? Want to help out? Here’s how to get in contact:</p>
    <Row className='contact-card-one'>
      <Col md={6}>
        <div className='contact-card' style={{ color: '#E74D3C' }}>
          <a
            href='mailto:contact@codeisscience.com'
            style={{ 'text-decoration': 'none', color: 'inherit' }}
          >
            <ImMail size={150} />
            <p>
              <a href='mailto:contact@codeisscience.com'>contact@codeisscience.com</a>
            </p>
          </a>
        </div>
      </Col>
      <Col md={6}>
        <div className='contact-card' style={{ color: '#4C4C4D' }}>
          <a
            href='https://github.com/codeisscience'
            target='_blank'
            rel='noreferrer'
            style={{ 'text-decoration': 'none', color: 'inherit' }}
          >
            <ImGithub size={150} />
            <p>
              <a href='https://github.com/codeisscience' target='_blank' rel='noreferrer'>
                GitHub
              </a>
            </p>
          </a>
        </div>
      </Col>
    </Row>
    <Row className='contact-card-two'>
      <Col md={6}>
        <div className='contact-card' style={{ color: '#3D9DD9' }}>
          <a
            href='https://twitter.com/codeisscience'
            target='_blank'
            rel='noreferrer'
            style={{ 'text-decoration': 'none', color: 'inherit' }}
          >
            <ImTwitter size={150} />
            <p>
              <a href='https://twitter.com/codeisscience' target='_blank' rel='noreferrer'>
                @codeisscience
              </a>
            </p>
          </a>
        </div>
      </Col>
      <Col md={6}>
        <div className='contact-card' style={{ color: '#4C4C4D' }}>
          <a
            href='https://gitter.im/codeisscience/Lobby'
            target='_blank'
            rel='noreferrer'
            style={{ 'text-decoration': 'none', color: 'inherit' }}
            A
          >
            <FaGitter size={150} />
            <p>
              <a href='https://gitter.im/codeisscience/Lobby' target='_blank' rel='noreferrer'>
                Gitter
              </a>
            </p>
          </a>
        </div>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col md={6} className='contact-form'>
        <Form>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='email' placeholder='someone@example.com' />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId='formHorizontalSubject'>
            <Form.Label column sm={2}>
              Subject
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='password' placeholder='Code is Science' />
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} controlId='formHorizontalMessage'>
            <Form.Label column sm={2}>
              Message
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='text' placeholder='What is code is science' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formHorizontalCheck'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label='Remember me' />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit'>Send</Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
