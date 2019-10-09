import React from 'react';
import PropTypes from 'prop-types';
import styleVariants from './styleVariants';
import styles from './medal.module.css';

const STYLE_VARIANT_CASES = {
  default: {},
  gold: styleVariants.gold,
  silver: styleVariants.sliver,
  bronze: styleVariants.bronze,
};


const Medal = (props) => {
  const { data } = props;
  const { medal } = data;
  const { name, contest, medalVariant } = medal;
  return (
    <div className={styles['medal__container']}>
      <img alt='medal' src={STYLE_VARIANT_CASES[medalVariant]} />
      <div className={styles['medal__text']}>
        <b>ime:  </b>
        {name}
        <br />
        <b>natjecanje:  </b>
        {contest}
      </div>
    </div>
  );
};


export default Medal;

Medal.propTypes = {
  data: PropTypes.shape({
    medal: PropTypes,
  }).isRequired,
};
