import React from 'react';
import PropTypes from 'prop-types';
import StyleVariants from './styleVariants';
import './block.css';

const STYLE_VARIANT_CASES = {
  default: {},
  block1: StyleVariants.block1Style,
  block2: StyleVariants.block2Style,
  block3: StyleVariants.block3Style,
  block4: StyleVariants.block4Style,
  block5: StyleVariants.block5Style,
  block6: StyleVariants.block6Style,
  block7: StyleVariants.block7Style,
};

const Block = (props) => {
  const { children, variant } = props;
  return (
    <div className='block' style={STYLE_VARIANT_CASES[variant]}>
      {children}
    </div>
  );
};

Block.propTypes = {
  variant: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.any,
};

Block.defaultProps = {
  variant: 'default',
  children: '',
};

export default Block;
