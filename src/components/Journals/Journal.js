/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import JournalList from './JournalList';
// import useFetch from './useFetch';
import { JContainer, Head, Search, SearchTerm, SearchButton } from './styles';

const Journal = ({ posts, search, setSearch }) => {
  // const { journalFetch, isPending, error } = useFetch('http://localhost:8000/journals/');

  return (
    <JContainer>
      <Head>Journals</Head>
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
      <JournalList posts={posts} />
    </JContainer>
  );
};

export default Journal;
