/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiSearch } from 'react-icons/fi';
import Pagination from '../Pagination/Pagination';
import {
  Box,
  Preview,
  Head2,
  Authors,
  Head3,
  Description,
  Search,
  SearchTerm,
  SearchButton,
} from './styles';
import GET_ALL_JOURNALS from '../../graphql/queries/getAllJournals';
import reducer from '../../useReducer/Journals/reducer';

const JournalList = () => {
  const initialState = {
    posts: [],
    searchResults: [],
    currentPage: 1,
    search: '',
    postsPerPage: 10,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, loading } = useQuery(GET_ALL_JOURNALS, {
    variables: { currentPageNumber: state.currentPage, limitValue: state.postsPerPage },
  });

  console.log(typeof state.postsPerPage);

  useEffect(() => {
    dispatch({ type: 'POSTS', payload: data?.getAllJournals });
  }, [data?.getAllJournals]);

  useEffect(() => {
    const filteredResults = state.posts.filter(
      (post) =>
        post.issn.includes(state.search) ||
        post.title.toLowerCase().includes(state.search.toLowerCase()),
    );

    dispatch({ type: 'SEARCH_RESULTS', payload: filteredResults.reverse() });
  }, [state.posts, state.search]);

  const indexOfLastPost = state.currentPage * state.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
  const currentPost = state.searchResults.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => dispatch({ type: 'CURRENT_PAGE', payload: pageNumber });

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Search>
          <SearchTerm
            id='search'
            type='text'
            placeholder='Search Journal'
            value={state.search}
            onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
          />
          <SearchButton type='submit'>
            <FiSearch />
          </SearchButton>
        </Search>
      </form>
      <Box>
        {currentPost.map((blog) => (
          <Preview key={blog.id}>
            <Head2 primary>{blog.domainName}</Head2>
            <Link to={`/policy/${blog.issn}`}>
              <Head2>{blog.title}</Head2>
              <Authors>
                <Head3 secondary>{blog.createdBy}</Head3>
              </Authors>
              <Description>
                <Head3>{blog.domainName} |</Head3>
                <Head3>ISSN: {blog.issn}</Head3>
              </Description>
              <Head3>
                <span style={{ color: '#EC8D20' }}>First Published: </span>
                {blog.createdAt}
              </Head3>
            </Link>
          </Preview>
        ))}
        <Pagination
          postsPerPage={state.postsPerPage}
          totalPosts={state.posts.length}
          paginate={paginate}
        />
      </Box>
    </>
  );
};

export default JournalList;
