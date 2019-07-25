import React from 'react';
import './news.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import { Footer0, Footer1 } from '../../components/common/footer/footer';
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
    <Footer0 />
    <Footer1 />
  </div>
);

export default News;
