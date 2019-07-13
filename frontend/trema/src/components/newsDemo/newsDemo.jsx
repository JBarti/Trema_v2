import React from 'react';
import Title from '../common/title/title';
import Paraf from '../common/paraf/paraf';
import Style from '../../pages/home/Style';
import './newsDemo.css';

const NewsDemo = (props) => {
  const { text, title } = props;
  return (
    <div className='newsDemo'>
      <Title style={Style.newsDemoTitleStyle}>{title}</Title>
      <Paraf>{text}</Paraf>
    </div>
  );
};

export default NewsDemo;
