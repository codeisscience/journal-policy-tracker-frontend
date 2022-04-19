/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';
import "../styles/Journal.css"

import AddJournal from '../components/AddJournal';

const Journal = () => (
  <Container className='journal-padding'>
    <h1 className='text-center'>Journals</h1>
    <AddJournal />
  </Container>
);

export default Journal;
