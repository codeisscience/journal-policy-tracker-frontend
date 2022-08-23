/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Journals } from '../../components';
import { Container } from '../../components/Journals/styles';
import { useGlobalContext } from '../../context/DataContext';

const Journal = () => {
  const { posts, search, setSearch, loading, postsPerPage, totalPosts, paginate, currentPost } =
    useGlobalContext();
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Container>
      {currentPost.length ? (
        <Journals
          posts={currentPost}
          search={search}
          setSearch={setSearch}
          loading={loading}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      ) : (
        <p>No posts to display</p>
      )}
    </Container>
  );
};

export default Journal;
