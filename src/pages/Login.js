/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import '../styles/Login.css';
import { Col, Row, Form, Button } from 'react-bootstrap';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    accessToken: '',
  };

  handleLogin = (e) => {
    e.preventDefault();
    fetch('https://journal-policy-tracker.herokuapp.com/users/login', {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        alert('Login successful');
        // The response is expected to be in the form:
        // {
        // message: "Login Successful!"
        // token: "",
        // }

        this.setState({
          accessToken: res.token,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <Row className='login-padding login-margin'>
        <Col md={4} />
        <Col md={4}>
          <Form className='login-form'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={this.state.email}
                onChange={this.handleEmailChange}
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
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button variant='primary' onClick={this.handleLogin} type='submit'>
              Login
            </Button>
          </Form>
        </Col>
        <Col md={4} />
      </Row>
    );
  }
}

export default Login;
