/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';

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
import GET_ALL_JOURNALS from '../../graphql/queries/getAllJournals';
import { Loader, Error } from '../marginals';

const JournalList = () => {
  // State
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  // Pagination Values
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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
      setSearchResults(filteredResults.reverse());
    }
  }, [data, search]);

  // Paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            onChange={(e) => setSearch(e.target.value)}
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
