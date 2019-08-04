import React from 'react';
import PropTypes from 'prop-types';
import styles from './tagFilter.module.css';
import SearchBar from '../../../../components/common/searchBar/searchBar';

const TagElement = (props) => {
  const {
    name,
    onClick,
    onKeyDown,
    selected,
  } = props;
  const tagClassName = selected ? 'tag__select--selected' : 'tag__select--unselected';
  return (
    <div
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={0}
      role='button'
      className={styles.tag__text}
    >
      <span className={`${styles.tag__select} ${styles[tagClassName]}`}>#</span>
      {name}
    </div>
  );
};

TagElement.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  selected: PropTypes.bool,
};

TagElement.defaultProps = {
  name: '',
  onClick: () => {},
  onKeyDown: () => {},
  selected: false,
};


class TagFilter extends React.Component {
  constructor(props) {
    super(props);
    const { tagNames } = props;

    const tagsObject = Object.fromEntries(
      tagNames.map((name, index) => [index, { name, value: false }]),
    );
    this.state = { tags: tagsObject };
    this.state.searchValue = '';

    this.onTagClick = this.onTagClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onTagClick(index) {
    return () => {
      const { onChange } = this.props;
      this.setState(
        (prevState) => {
          const tag = prevState.tags[index];
          tag.value = !tag.value;
          return { tags: { ...prevState.tags, [index]: tag } };
        },
        () => onChange(this.state),
      );
    };
  }

  onSearchChange(event) {
    const newValue = event.target.value;
    this.setState({ searchValue: newValue });
  }

  render() {
    const { tags, searchValue } = this.state;
    const tagObjects = Object.values(tags);
    return (
      <div className={styles['content-left']}>
        <div className={styles.content__searchbar}>
          <SearchBar value={searchValue} onChange={this.onSearchChange} isAnimated={false} style={{ width: '100%' }} />
        </div>
        <div className={styles.tag__list}>
          {tagObjects
            .filter(tag => tag.name.indexOf(searchValue) > -1)
            .map((tag, index) => (
              <TagElement
                name={tag.name}
                selected={tag.value}
                onClick={this.onTagClick(index)}
              />
            ))}
        </div>
      </div>
    );
  }
}

TagFilter.propTypes = {
  tagNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

TagFilter.defaultProps = {
  onChange: () => {},
};

export default TagFilter;
