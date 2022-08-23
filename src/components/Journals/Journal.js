/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import JournalList from './JournalList';
// import useFetch from './useFetch';
import { JContainer, Head, Search, SearchTerm, SearchButton } from './styles';

const Journal = ({ posts, search, postsPerPage, totalPosts, paginate, dispatch }) => {
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
            onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
          />
          {console.log(search)}
          <SearchButton type='submit'>
            <FiSearch />
          </SearchButton>
        </Search>
      </form>
      <JournalList
        posts={posts}
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </JContainer>
  );
};

export default Journal;
