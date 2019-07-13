import React from 'react';
import PropTypes from 'prop-types';
import StyleVariants from './styleVariants';
import './block.css';

const STYLE_VARIANT_CASES = {
  default: {},
  block2: StyleVariants.block2Style,
  block3: StyleVariants.block3Style,
  block1: StyleVariants.block1Style,
  block4: StyleVariants.block4Style,
};

const Block = (props) => {
  const { children, style } = props;
  return (
    <div className='block' style={STYLE_VARIANT_CASES[style]}>
      {children}
    </div>
  );
};

Block.propTypes = {
  style: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.elementType,
};

Block.defaultProps = {
  style: 'default',
  children: '',
};

export default Block;
