import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const AddJournal = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [issn, setIssn] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");
  const [policies, setPolicies] = useState("");
  const [domain, setDomain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const journal = { title, url, issn, rating, date, policies, domain };

    fetch("https://journal-policy-tracker.herokuapp.com/api/journals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(journal),
    }).then(() => {
      console.log("New Journal Added");
    });
  };

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Journal title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicIssn">
            <Form.Label>ISSN</Form.Label>
            <Form.Control
              type="text"
              placeholder="ISSN"
              onChange={(e) => setIssn(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rating"
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPolicies">
            <Form.Label>Policies</Form.Label>
            <Form.Control
              type="text"
              placeholder="Policies"
              onChange={(e) => setPolicies(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDomain">
            <Form.Label>Domain</Form.Label>
            <Form.Control
              type="text"
              placeholder="Domain"
              onChange={(e) => setDomain(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Journal
          </Button>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default AddJournal;
