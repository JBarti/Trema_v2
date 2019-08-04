import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../components/common/title/title';
import Paraf from '../../../../components/common/paraf/paraf';
import styles from './newsDemo.module.css';

const NewsDemo = (props) => {
  const { text, title } = props;
  return (
    <div className={styles['newsDemo']}>
      <Title variant='default'>{title}</Title>
      <Paraf>{text}</Paraf>
    </div>
  );
};

NewsDemo.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsDemo;
