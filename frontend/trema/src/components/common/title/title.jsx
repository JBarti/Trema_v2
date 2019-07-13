import React from 'react';
import './title.css';
import PropTypes from 'prop-types';
import StyleVariant from './styleVariants';

const STYLE_VARIANT_CASES = {
  default: {},
  block2: StyleVariant.block2TitleStyle,
  newsDemo: StyleVariant.newsDemoTitleStyle,
};

const Title = (props) => {
  const { children, variant } = props;
  return (
    <div style={STYLE_VARIANT_CASES[variant]} className='title'>
      {children}
    </div>
  );
};

Title.propTypes = {
  variant: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.any,
};

Title.defaultProps = {
  variant: 'default',
  children: '',
};

export default Title;
