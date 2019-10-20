import React from 'react';
import PropTypes from 'prop-types';
import Paraf from '../../../../components/common/paraf/paraf';
import Title from '../../../../components/common/title/title';
import styles from './projects.module.css';

const Projects = (props) => {
  const { data } = props;
  const { title, paragraph } = data;

  return (
    <div className={styles['projekti__container']}>
      <div className={styles['projekti__text']}>
        <div className={styles['projekti__title']}>
          <Title variant='default'>{title}</Title>
        </div>
        <div className={styles['projekti__paragraph']}>{paragraph}</div>
        <div className={styles['projekti__div']}>
          Više
        </div>
      </div>
    </div>
  );
};

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
};
