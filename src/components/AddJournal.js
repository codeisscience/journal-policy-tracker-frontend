import { React, Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddJournal extends Component {
  render() {
    return (
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Journal title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicIssn">
              <Form.Label>ISSN</Form.Label>
              <Form.Control type="text" placeholder="ISSN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="text" placeholder="Rating" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDomain">
              <Form.Label>Domain</Form.Label>
              <Form.Control type="text" placeholder="Domain" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Journal
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    );
  }
}

export default AddJournal;
