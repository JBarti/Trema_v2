import React from 'react';
import PropTypes from 'prop-types';
import styles from './tagFilter.module.css';
import SearchBar from '../../../../components/common/searchBar/searchBar';

const TagElement = (props) => {
  const { name, onClick, onKeyDown } = props;
  return (
    <div
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={0}
      role='button'
      className={styles['tag__text']}
    >
      <span className={styles['tag__select']}>#</span>
      {name}
    </div>
  );
};

TagElement.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

TagElement.defaultProps = {
  name: '',
  onClick: () => {},
  onKeyDown: () => {},
};


const TagFilter = () => (
  <div className={styles['content-left']}>
    <div className={styles['content__searchbar']}>
      <SearchBar isAnimated={false} style={{ width: '100%' }} />
    </div>
    <div className={styles.tag__list}>
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
      <TagElement name='Lorem ipsum' />
    </div>
  </div>
);

export default TagFilter;
