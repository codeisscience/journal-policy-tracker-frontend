/* eslint-disable react/function-component-definition */
import { React, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { showSuccessMessage, showErrorMessage } from '../helpers/alerts';
import { SignupValidation } from '../helpers/validate';
import '../styles/Signup.css';

const SignUp = () => {
  const [details, setDetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    const check = SignupValidation(details);
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[A-Z])[a-zA-Z0-9!@#%^&*_]{8,}$/;

    if (!check) {
      setError('Invalid Email/Username');
    } else if (details.password !== details.confirmPassword) {
      setError('Passwords do not match');
    } else if (!regex.test(details.password)) {
      setError(
        'Use 8 or more characters with a mix of upper and lowercase letters, numbers & symbols',
      );
    } else {
      try {
        fetch('https://journal-policy-tracker.herokuapp.com/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(details),
        });
        setSuccess('Signup Successful');
        setTimeout(() => {
          window.location.href = '/login';
        }, 800);
      } catch (err) {
        setError('Signup Failed');
      }
    }
  };

  return (
    <Row className='signup-padding'>
      <Col>
        <Form className='login-form' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicUsername'>
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='User123'
              name='username'
              onChange={(e) => setDetails({ ...details, username: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='user@example.com'
              name='email'
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
            />
            <Form.Text id='passwordHelpBlock' muted style={{ fontSize: '12px' }}>
              Your password must be 8 or more characters long with a mix of upper and lowercase
              letters, numbers &amp; symbols
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              name='confirmPassword'
              onChange={(e) => setDetails({ ...details, confirmPassword: e.target.value })}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Sign Up
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;

// if (details.password !== details.confirmPassword) {
//   // console.log('password do not match');
//   setError('Passwords do not match');
// } else {
//   const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[A-Z])[a-zA-Z0-9!@#%^&*_]{8,}$/;
//   if (!regex.test(details.password))
//     setError(
//       'Use 8 or more characters with a mix of upper and lowercase letters, numbers & symbols',
//     );
//   else {
//     const check = SignupValidation(details);
//     if (check) {
//       try {
//         fetch('https://journal-policy-tracker.herokuapp.com/users/register', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(details),
//         });
//         setSuccess('Signup Successful');
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 800);
//       } catch (err) {
//         setError('Signup Failed');
//       }
//     } else {
//       setError('Invalid Email/Username');
//     }
//   }
// }
