import React from 'react';
import Header from '../components/Header';
import LandingSection from '../components/LandingSection';
import "../styles/Header.css"

function Home() {
  return (
    <div className='header-padding'>
       <Header />
      <LandingSection />
    </div>
  );
}

export default Home;
