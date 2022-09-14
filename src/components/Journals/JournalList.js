/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';

// Libraries
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiSearch } from 'react-icons/fi';

// Styles
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

// Components
import Pagination from '../Pagination/Pagination';
import { Loader, Error } from '../marginals';

// Graphql
import GET_ALL_JOURNALS from '../../graphql/queries/getAllJournals';

// Reducer
import { useGlobalContext } from '../../context/DataContext';

const JournalList = () => {
  // States
  const { searchResults, search, currentPage, postsPerPage, dispatch } = useGlobalContext();

  // Query from GraphQL
  const { data, loading, error } = useQuery(GET_ALL_JOURNALS, {
    variables: { currentPageNumber: currentPage, limitValue: postsPerPage },
  });

  // SearchBar values
  useEffect(() => {
    if (data) {
      const filteredResults = data.getAllJournals.journals.filter(
        (post) =>
          post.issn.includes(search) || post.title.toLowerCase().includes(search.toLowerCase()),
      );
      dispatch({ type: 'SEARCH_RESULTS', payload: filteredResults.reverse() });
    }
  }, [data, search, dispatch]);

  // Paginate
  const paginate = (pageNumber) => dispatch({ type: 'CURRENT_PAGE', payload: pageNumber });

  // Loading and Error component
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Search>
          <SearchTerm
            id='search'
            type='text'
            placeholder='Search Journal'
            value={search}
            onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
          />
          <SearchButton type='submit'>
            <FiSearch />
          </SearchButton>
        </Search>
      </form>
      <Box>
        {searchResults.map((blog) => (
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
          postsPerPage={postsPerPage}
          totalPosts={data.getAllJournals.totalJournals}
          paginate={paginate}
        />
      </Box>
    </>
  );
};

export default JournalList;
