/* eslint-disable no-alert */
import { React, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { showSuccessMessage, showErrorMessage } from "../../helpers/alerts"
import { JournalValidation } from '../../helpers/validate';

function AddJournal() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [issn, setIssn] = useState('');
  const [rating, setRating] = useState('');
  const [date, setDate] = useState('');
  const [policyTitle, setPolicyTitle] = useState('');
  const [firstYear, setFirstYear] = useState('');
  const [lastYear, setLastYear] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [domain, setDomain] = useState('');
  const [success,setSuccess] = useState("");
  const [error,setError]=useState("");

  const emptyFields=()=>{
    setTitle("");
    setUrl("");
    setIssn("");
    setRating("");
    setDate("");
    setPolicyTitle("");
    setFirstYear("");
    setLastYear("");
    setPolicyType("");
    setDomain("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const check = JournalValidation(title, url, issn, rating, policyTitle, firstYear,
                                lastYear, policyType, domain, date)
    if(check){
    const policies = {
      title: policyTitle,
      first_year: firstYear,
      last_year: lastYear,
      type: policyType,
    };
    const journal = { title, url, issn, rating, date, policies, domain };

    try{
    window.scrollTo(0,0);
    fetch('https://journal-policy-tracker.herokuapp.com/api/journals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journal),
    })
    emptyFields();
    setSuccess("Journal Added Successfuly")
    }
    catch(err)
    {
      setError("Cannot Add Journal")
    }
  }
  else{
    window.scrollTo(0,0);
    setError("Invalid Input")
  }
   
  };

  return (
    <Row>
      <Col className='m-auto'>
        <Form className='login-form responsive' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicTitle'>
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Journal title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicUrl'>
            <Form.Label>URL</Form.Label>
            <Form.Control type='text' placeholder='URL' 
            onChange={(e) => setUrl(e.target.value)} value={url} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicIssn'>
            <Form.Label>ISSN</Form.Label>
            <Form.Control
              type='text'
              placeholder='ISSN'
              onChange={(e) => setIssn(e.target.value)}
              value={issn}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicRating'>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type='text'
              placeholder='Rating'
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicDate'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Date'
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPolicies'>
            <Form.Label>Policies</Form.Label>
            <Form.Control
              type='text'
              placeholder='Policy Title'
              onChange={(e) => setPolicyTitle(e.target.value)}
              value={policyTitle}
            />
            <Form.Control
              type='text'
              placeholder='First Year'
              onChange={(e) => setFirstYear(e.target.value)}
              value={firstYear}
            />
            <Form.Control
              type='text'
              placeholder='Last Year'
              onChange={(e) => setLastYear(e.target.value)}
              value={lastYear}
            />
            <Form.Control
              type='text'
              placeholder='Type'
              onChange={(e) => setPolicyType(e.target.value)}
              value={policyType}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicDomain'>
            <Form.Label>Domain</Form.Label>
            <Form.Control
              type='text'
              placeholder='Domain'
              onChange={(e) => setDomain(e.target.value)}
              value={domain}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Add Journal
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddJournal;
