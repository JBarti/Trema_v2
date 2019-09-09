import React from 'react';
import PropTypes from 'prop-types';
import Paraf from '../../../../components/common/paraf/paraf';
import Title from '../../../../components/common/title/title';
import styles from './schoolHistory.module.css';

const SchoolHistory = (props) => {
  const { data } = props;
  const { title, paragraph, imageSource } = data;

  return (
    <div className={styles['schoolHistory__container']}>
      <div className={styles['schoolHistory__text']}>
        <Title variant='default'>{title}</Title>
        <Paraf variant='default'>{paragraph}</Paraf>
      </div>
      <img alt='schoolHistory' src={imageSource} className={styles['schoolHistory__image']} />
    </div>
  );
};

export default SchoolHistory;

SchoolHistory.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    imageSource: PropTypes.string,
  }).isRequired,
};
