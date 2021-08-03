import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function SignUp() {
  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSecondName">
            <Form.Label>Second name</Form.Label>
            <Form.Control type="text" placeholder="Second name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default SignUp;
