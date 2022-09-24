import React from 'react';
import { Header, LandingSection } from '../components';
import '../components/Landing/Header/Header.css';
import { useGlobalContext } from '../context/DataContext';

function Home() {
  const {
    search,
    searchResults,
    setSearch,
    posts,
    filteredData,
    setFilteredData,
    wordEntered,
    setWordEntered,
    handleFilter,
  } = useGlobalContext();
  return (
    <div className='header-padding'>
      <Header
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        posts={posts}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        wordEntered={wordEntered}
        setWordEntered={setWordEntered}
        handleFilter={handleFilter}
      />
      <LandingSection />
    </div>
  );
}

export default Home;
