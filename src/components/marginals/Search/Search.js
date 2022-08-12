/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../../index.css';

function SearchBar({ posts }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = posts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' value={wordEntered} onChange={handleFilter} />
      </div>

      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value, key) => (
            <Link to={`/policy/${value.id}`} className='dataItem'>
              <p>{value.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
