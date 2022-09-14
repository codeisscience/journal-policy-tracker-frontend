/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useReducer } from 'react';
import { useQuery } from '@apollo/client';
import { Journals } from '../../components';
import { Container } from '../../components/Journals/styles';
import GET_ALL_JOURNALS from '../../graphql/queries/getAllJournals';
import reducer from '../../useReducer/Journals/reducer';

const Journal = () => {
  const initialState = {
    currentPage: 1,
    postsPerPage: 5,
  };

  const [state] = useReducer(reducer, initialState);

  const { loading } = useQuery(GET_ALL_JOURNALS, {
    variables: { currentPageNumber: state.currentPage, limitValue: state.postsPerPage },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Container>
      <Journals />
    </Container>
  );
};

export default Journal;
