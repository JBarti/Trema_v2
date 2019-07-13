import React from 'react';
import './title.css';

const Title = (props) => {
  const { children, style } = props;
  return (
    <div style={style} className='title'>
      {children}
    </div>
  );
};

export default Title;
