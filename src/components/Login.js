/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <Form className='login-form'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Remember me' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default Login;
