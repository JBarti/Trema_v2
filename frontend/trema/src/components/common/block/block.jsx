import React from 'react';
import './block.css';

const Block = (props) => {
  const { children, style } = props;
  return (
    <div className='block' style={style}>
      {children}
    </div>
  );
};
export default Block;
