import React from 'react';
import PropTypes from 'prop-types';
import styles from './triangleDecorator.module.css';

const TriangleDecorator = (props) => {
  const {
    color1,
    color2,
    height,
    width,
  } = props;

  const triangleStyle = {
    borderWidth: `0 ${width} ${height} 0`,
    borderColor: `transparent ${color1} ${color2} transparent`,
  };

  return (
    <div style={triangleStyle} className={styles['triangle-decorator']} />
  );
};

TriangleDecorator.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
};

TriangleDecorator.defaultProps = {
  width: '100vw',
  height: '78px',
  color1: 'darkgray',
  color2: 'transparent',
};

export default TriangleDecorator;
