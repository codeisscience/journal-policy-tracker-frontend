/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Journals } from '../../components';
import { Container } from '../../components/Journals/styles';

const Journal = ({ posts, search, setSearch }) => {
  return (
    <Container>
      {posts.length ? (
        <Journals posts={posts} search={search} setSearch={setSearch} />
      ) : (
        <p>No posts to display</p>
      )}
    </Container>
  );
};

export default Journal;
