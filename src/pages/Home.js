import React, { useContext } from 'react';
import { Header, LandingSection } from '../components';
import '../components/Landing/Header/Header.css';
import DataContext from '../context/DataContext';

function Home() {
  const { posts, filteredData, setFilteredData, wordEntered, setWordEntered, handleFilter } =
    useContext(DataContext);
  return (
    <div className='header-padding'>
      <Header
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
