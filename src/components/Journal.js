import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';

import AddJournal from './AddJournal';

const Journal = () => (
  <Container>
    <h1>Journals</h1>
    <AddJournal />
  </Container>
);

export default Journal;
