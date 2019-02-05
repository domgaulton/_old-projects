import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className='searchBox'
        type='search' 
        placeholder='Search Crypto Currencies' 
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;