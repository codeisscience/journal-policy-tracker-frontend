/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';

import AddJournal from '../components/AddJournal';

const Journal = () => (
  <Container>
    <h1>Journals</h1>
    <AddJournal />
  </Container>
);

export default Journal;
