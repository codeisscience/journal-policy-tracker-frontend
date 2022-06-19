import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../../../index.css';

function SearchBar() {
  return (
    <div className='search' >
      <div className='searchInputs'>
        <input type='text' />
        <div className='searchIcon'>
          <FiSearch style={{ color: 'orange' }} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
