import React from 'react';
import PropTypes from 'prop-types';
import styleVariants from './styleVariants';
import './paraf.css';


const STYLE_VARIANT_CASES = {
  default: {},
  block2: styleVariants.block2ParafStyle,
};


const Paraf = (props) => {
  const { children, variant } = props;
  return (
    <div style={STYLE_VARIANT_CASES[variant]} className='paraf'>
      {children}
    </div>
  );
};

Paraf.propTypes = {
  variant: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.any,
};

Paraf.defaultProps = {
  variant: 'default',
  children: '',
};

export default Paraf;
