import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SignUp = ({ SignUp, error }) => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    SignUp(details);
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
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="User123"
              name="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="user@example.com"
              name="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
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
