import React from 'react';
import styles from './news.module.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Block from '../../components/common/block/block';
import TagFilter from './components/tagFilter/tagFilter';


const News = () => (
  <div>
    <div className={styles.news__heading}>
      <div className={styles.heading__flag} />
    </div>
    <MainNavbar />
    <SideNavbar />
    <div className={styles.news__content}>
      <TagFilter />
      <div className={styles.content__middle} />
      <div className={styles.content__right} />
    </div>
    <Block />
  </div>
);

export default News;
