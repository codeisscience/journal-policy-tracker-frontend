/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Journals } from '../../components';
import { Container } from '../../components/Journals/styles';

const Journal = ({ posts, search, setSearch, loading, postsPerPage, totalPosts, paginate }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Container>
      {posts.length ? (
        <Journals
          posts={posts}
          search={search}
          setSearch={setSearch}
          loading={loading}
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      ) : (
        <p>No posts to display</p>
      )}
    </Container>
  );
};

export default Journal;
