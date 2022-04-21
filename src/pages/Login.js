/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import { React, useState } from 'react';
import '../styles/Login.css';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { showSuccessMessage, showErrorMessage } from '../helpers/alerts';
import { LoginValidation } from '../helpers/validate';

function Login() {
  const [details, setDetails] = useState({
    email: '',
    password: '',
    accessToken: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    const check = LoginValidation(details);
    if (check) {
      try {
        const response = fetch('https://journal-policy-tracker.herokuapp.com/users/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            details,
          }),
        });
        // const res = response.json();
        // setDetails({ ...details,accessToken: res.token })
        setSuccess('Login Successful');
      } catch (err) {
        // console.log(error);
        setError('Invalid Credentials');
      }
    } else {
      setError('Invalid Input');
    }
  };
  return (
    <Row className='login-padding login-margin'>
      <Col>
        <Form className='login-form' onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={details.password}
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Remember me' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;