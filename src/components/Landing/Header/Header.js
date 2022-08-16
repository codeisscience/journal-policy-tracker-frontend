/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { Button, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../marginals';

function Header({
  posts,
  filteredData,
  setFilteredData,
  wordEntered,
  setWordEntered,
  handleFilter,
}) {
  return (
    <div className='header'>
      <Jumbotron fluid>
        {/* <SearchBar
          posts={posts}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          wordEntered={wordEntered}
          setWordEntered={setWordEntered}
          handleFilter={handleFilter}
        /> */}
        <Link to='/manifesto'>
          <Button fluid='true'>Read and Sign the Manifesto</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Header;
