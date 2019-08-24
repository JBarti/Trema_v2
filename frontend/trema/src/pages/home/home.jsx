import React from 'react';
import styles from './home.module.css';

import Block from '../../components/common/block/block';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Title from '../../components/common/title/title';
import Paraf from '../../components/common/paraf/paraf';
import NewsDemo from './components/newsDemo/newsDemo';
import TriangleDecorator from '../../components/common/triangleDecorator/triangleDecorator';

import pozdravnaRijec from '../../data/pozdravnaRijec';

const Home = () => (
  <div>
    <Block variant='block1'>
      <div className={styles['block1__background']} />
    </Block>
    <MainNavbar />
    <SideNavbar />
    <Block variant='block2'>
      <div className={styles['image__ravnateljica']} />
      <div className={styles['block2__text']}>
        <Title variant='block2'>
          Dragi učenici, kolege, prijatelji!
        </Title>
        <Paraf variant='block2'>{pozdravnaRijec}</Paraf>
      </div>
    </Block>
    <TriangleDecorator />
    <Block variant='block3'>
      <div className={styles['block3__column']}>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
      <div className={`${styles['block3__column']} ${styles['block3__column-right']}`}>
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
        <NewsDemo title='test' text='lorem ipsum dolor sit amet' />
      </div>
    </Block>
    <Block variant='block4'>
      <div>
        <div className={styles['achievement__image']} />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className={styles['achievement__image']} />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className={styles['achievement__image']} />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
      <div>
        <div className={styles['achievement__image']} />
        <Title> lorem ipsum</Title>
        <Title> lorem ipsum</Title>
      </div>
    </Block>
  </div>
);

export default Home;
