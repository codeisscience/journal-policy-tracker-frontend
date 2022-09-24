/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import JournalList from './JournalList';
import { JContainer, Head, Container } from './styles';

const Journal = () => {
  return (
    <Container>
      <JContainer>
        <Head>Journals</Head>
        <JournalList />
      </JContainer>
    </Container>
  );
};

export default Journal;
