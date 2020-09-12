import React from 'react';
import './Search.scss';

export const Search = ({ onSearch }) => {
  return (
    <div className="app-search">
      <input
        type="text"
        placeholder="Search"
        className="app-search--input"
        onChange={(e) => onSearch(e.target.value)}/>
    </div>
  );
}