/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { Journals } from '../../components';
import { Container } from '../../components/Journals/styles';

const Journal = () => {
  const { search, setSearch, currentPost, loading, postsPerPage, paginate, totalPosts } =
    useContext(DataContext);
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
