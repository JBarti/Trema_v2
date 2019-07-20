import React from 'react';
import './Home.css';

import Block from '../../components/common/block/block';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Title from '../../components/common/title/title';
import Paraf from '../../components/common/paraf/paraf';
import NewsDemo from './components/newsDemo/newsDemo';

import pozdravnaRijec from '../../data/pozdravnaRijec';

const Home = () => (
  <div>
    <Block variant='block1'>
      <div className='block1__background' />
    </Block>
    <MainNavbar />
    <SideNavbar />
    <Block variant='block2'>
      <div className='image__ravnateljica' />
      <div className='block2__text'>
        <Title variant='block2'>
          Dragi učenici, kolege, prijatelji!
        </Title>
        <Paraf variant='block2'>{pozdravnaRijec}</Paraf>
      </div>
    </Block>
    <div className='triangle-decorator' />
    <Block variant='block3'>
      <div className='block3__column'>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
      <div className='block3__column block3__column--right'>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
    </Block>
    <Block variant='block4'>
      <div>
        <div className='achievement__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievement__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievement__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievement__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
    </Block>
    <Block variant='block5'>
      <div className='block5__image' />
      <div className='block5__image' />
      <div className='block5__image' />
      <div className='block5__image' />
    </Block>
  </div>
);

export default Home;
