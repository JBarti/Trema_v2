import React from 'react';
import './news.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Block from '../../components/common/block/block';


const News = () => (
  <div>
    <div className='news__heading'>
      <div className='heading__flag' />
    </div>
    <MainNavbar />
    <SideNavbar />
    <div className='news__content'>
      <div className='content__left' />
      <div className='content__middle' />
      <div className='content__right' />
    </div>
    <Block />
  </div>
);

export default News;
