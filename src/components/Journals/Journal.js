/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import JournalList from './JournalList';
// import useFetch from './useFetch';
import { JContainer, Head } from './styles';

const Journal = ({ posts }) => {
  // const { journalFetch, isPending, error } = useFetch('http://localhost:8000/journals/');

  return (
    <JContainer>
      <Head>Journals</Head>
      <JournalList posts={posts} />
    </JContainer>
  );
};

export default Journal;
