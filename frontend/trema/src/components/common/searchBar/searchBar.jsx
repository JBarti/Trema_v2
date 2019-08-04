import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';


const SearchBar = (props) => {
  const { isAnimated, placeholder } = props;
  const searchTxtClassName = `search-txt ${isAnimated ? 'search-txt__animated' : ''}`;
  return (
    <div className='search-box'>
      <input className={searchTxtClassName} type='text' placeholder={placeholder} />
      <a className='search-btn'>
        <i className='fas fa-search' />
      </a>
    </div>
  );
};


SearchBar.propTypes = {
  isAnimated: PropTypes.bool,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  isAnimated: true,
  placeholder: '',
};

export default SearchBar;
