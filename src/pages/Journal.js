import React from "react";
import { Col, Row, Container, Table } from "react-bootstrap";

import AddJournal from "../components/AddJournal";

const Journal = () => {
  return (
    <Container>
      <h1>Journals</h1>
      <AddJournal />
    </Container>
  );
};

export default Journal;
