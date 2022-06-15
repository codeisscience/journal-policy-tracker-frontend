import React, { useState } from 'react';
import './Contact.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ImTwitter, ImMail, ImGithub } from 'react-icons/im';
import { FaGitter } from 'react-icons/fa';

function Contact(){
  let formIsValid = false

  const [email, setEmailAttr] = useState({
    value: '',
    focused: false
  })
  const [subject, setSubjectAttr] = useState({
    value: '',
    focused: false
  })
  const [message, setMessageAttr] = useState({
    value: '',
    focused: false
  })


  const setEmailVal = e => setEmailAttr(prev => ({ ...prev, value: e.target.value }))
  const setSubjectVal = e => setSubjectAttr(prev => ({ ...prev, value: e.target.value }))
  const setMsgVal = e => setMessageAttr(prev => ({ ...prev, value: e.target.value }))

  const setEmailFocus = () => setEmailAttr(prev => ({ ...prev, focused: true }))
  const setSubjectFocus = () => setSubjectAttr(prev => ({ ...prev, focused: true }))
  const setMsgFocus = () => setMessageAttr(prev => ({ ...prev, focused: true }))

  const emailIsValid = !!email.value
  const subjectIsValid = !!subject.value
  const messageIsValid = !!message.value

  const emailIsInvalid = email.focused && !emailIsValid
  const subjectIsInvalid = subject.focused && !subjectIsValid
  const messageIsInvalid = message.focused && !messageIsValid

  formIsValid = emailIsValid && subjectIsValid && messageIsValid

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!formIsValid) {
      console.log("INVALID FORM")
      return
    }

    console.log("PERFORM NETWORK REQUEST HERE")
    setEmailAttr({value:'',focused:false})
    setSubjectAttr({value:'',focused:false})
    setMessageAttr({value:'',focused:false})

  }

  return (
    <Container>
      <h1 className="mt-4">Contact Us</h1>
      <p className='mt-p'>
        Ideas? Comments? Critiques? Want to help out? Here’s how to get in contact:
      </p>
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
            <FaGitter size={150} />
            <a
            href='https://gitter.im/codeisscience/Lobby'
            target='_blank'
            rel='noreferrer'
            style={{ 'text-decoration': 'none', color: 'inherit' }}
            >
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
          <Form onSubmit={formSubmitHandler}>
            <Form.Group as={Row} controlId='formHorizontalEmail'>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='email'
                  value={email.value}
                  onChange={setEmailVal}
                  onBlur={setEmailFocus}
                  placeholder='someone@example.com' />
                {emailIsInvalid && <p className='invalidInput'>Email cannot be empty.</p>}
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId='formHorizontalSubject'>
              <Form.Label column sm={2}>
                Subject
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='text'
                  value={subject.value}
                  onChange={setSubjectVal}
                  onBlur={setSubjectFocus}
                  placeholder='Code is Science' />
                {subjectIsInvalid && <p className='invalidInput'>Subject cannot be empty.</p>}
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row} controlId='formHorizontalMessage'>
              <Form.Label column sm={2}>
                Message
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea"
                  value={message.value}
                  rows={3}
                  onChange={setMsgVal}
                  onBlur={setMsgFocus}
                  placeholder="Enter your message here..." />
                {messageIsInvalid && <p className='invalidInput'>Message cannot be empty.</p>}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formHorizontalCheck' className='mt-3'>
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label='Remember me' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mt-3'>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type='submit' disabled={!formIsValid}>Send</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact