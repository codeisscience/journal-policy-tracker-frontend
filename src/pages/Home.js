import React from 'react';
import { Header, LandingSection } from '../components';
import "../components/Landing/Header/Header.css"

function Home() {
  return (
    <div className='header-padding'>
       <Header />
      <LandingSection />
    </div>
  );
}

export default Home;
