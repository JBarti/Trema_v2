import React from 'react';
import PropTypes from 'prop-types';
import styleVariants from './styleVariants';
import './paraf.css';


const STYLE_VARIANT_CASES = {
  default: {},
  block2: styleVariants.block2ParafStyle,
};


const Paraf = (props) => {
  const { children, style } = props;
  return (
    <div style={STYLE_VARIANT_CASES[style]} className='paraf'>
      {children}
    </div>
  );
};

Paraf.propTypes = {
  style: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.elementType,
};

Paraf.defaultProps = {
  style: 'default',
  children: '',
};

export default Paraf;
