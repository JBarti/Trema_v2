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
  const { children, style } = props;
  return (
    <div style={STYLE_VARIANT_CASES[style]} className='title'>
      {children}
    </div>
  );
};

Title.propTypes = {
  style: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.elementType,
};

Title.defaultProps = {
  style: 'default',
  children: '',
};

export default Title;
