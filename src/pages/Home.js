import React from 'react';
import { Header, LandingSection } from '../components';
import '../components/Landing/Header/Header.css';

function Home({ search, setSearch, searchResults, posts }) {
  return (
    <div className='header-padding'>
      <Header search={search} setSearch={setSearch} searchResults={searchResults} posts={posts} />
      <LandingSection />
    </div>
  );
}

export default Home;
