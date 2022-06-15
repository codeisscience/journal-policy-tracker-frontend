/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';

import { AddJournal } from '../../components';

const Journal = () => (
  <Container style={{"padding-top": 130}}>
    <h1 className='text-center'>Journals</h1>
    <AddJournal />
  </Container>
);

export default Journal;
