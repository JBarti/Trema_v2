import React from 'react';
import PropTypes from 'prop-types';
import Paraf from '../../../../components/common/paraf/paraf';
import Title from '../../../../components/common/title/title';
import Block from '../../../../components/common/block/block';

const Projekti = (props) => {
    const { data } = props;
    const { title, paragraph, block } = data;
  
    return (
      <div className={styles['projekti__container']}>
        <div className={styles['projekti__text']}>
          <Title variant='default'>{title}</Title>
          <Paraf variant='default'>{paragraph}</Paraf>
          <Block variant='default'>{block}</Block>
        </div>
      </div>
    );
  };

export default Projekti;

Projekti.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      paragraph: PropTypes.string,
      block: PropTypes.string,
    }).isRequired,
  };