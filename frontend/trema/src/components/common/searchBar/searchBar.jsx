import React, { Fragment } from 'react';
import './searchBar.css';

const SearchBar = () => (
  <Fragment>
    <div className='search-box'>
      <input className='search-txt' type='text' placeholder='Search' />
      <a className='search-btn'>
        <i className='fas fa-search' />
      </a>
    </div>
  </Fragment>
);

export default SearchBar;
