import React from 'react';
import './Home.css';
import style from './Style';

import Block from '../../components/common/block/block';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Title from '../../components/common/title/title';
import Paraf from '../../components/common/paraf/paraf';
import NewsDemo from '../../components/newsDemo/newsDemo';

import pozdravnaRijec from '../../data/pozdravnaRijec';

const Home = () => (
  <div>
    <Block style={style.block1Style}>
      <div className='block1__background' />
    </Block>
    <MainNavbar />
    <SideNavbar />
    <Block style={style.block2Style}>
      <div className='image__ravnateljica' />
      <div className='block2__text'>
        <Title style={style.block2TitleStyle}>
          Dragi učenici, kolege, prijatelji!
        </Title>
        <Paraf style={style.block2ParafStyle}>{pozdravnaRijec}</Paraf>
      </div>
    </Block>
    <div className='triangle-decorator' />
    <Block style={style.block3Style}>
      <div className='block3__column'>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
      <div className='block3__column block3__column--right'>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
    </Block>
    <Block style={style.block4Style}>
      <div>
        <div className='achievment__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievment__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievment__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className='achievment__image' />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
    </Block>
  </div>
)

export default Home;
