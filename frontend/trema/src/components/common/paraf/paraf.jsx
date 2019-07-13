import React from 'react';
import './paraf.css';

const Paraf = (props) => {
  const { children, style } = props;
  return (
    <div style={style} className='paraf'>
      {children}
    </div>
  );
};

export default Paraf;
