import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://journal-policy-tracker.herokuapp.com/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then(() => {
      console.log("Sign up was successful");
    });
  };

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="User123" name="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="user@example.com"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default SignUp;
