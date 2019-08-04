import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.module.css';


const SearchBar = (props) => {
  const { isAnimated, placeholder } = props;
  const searchTxtClassName = `${styles['search-txt']} ${isAnimated ? styles['search-txt__animated'] : ''}`;
  return (
    <div className={styles['search-box']}>
      <input className={searchTxtClassName} type='text' placeholder={placeholder} />
      <a className={styles['search-btn']}>
        <i className={`${styles['fas']} ${styles['fa-search']}`} />
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
