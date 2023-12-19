import React, {useState} from 'react'
export const SearchComponent = ({ onSearch }) => {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  };