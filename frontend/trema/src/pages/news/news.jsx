import React from 'react';
import styles from './news.module.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import Block from '../../components/common/block/block';
import TagFilter from './components/tagFilter/tagFilter';
import MonthPicker from './components/monthPicker/monthPicker';
import NewsPin from './components/newsPin/newsPin';


class News extends React.Component {
  constructor(props) {
    super(props);

    this.tagNames = ['mate', 'miso', 'kovac'];
    const tagsObject = Object.fromEntries(
      this.tagNames.map((name, index) => [index, { name, value: false }]),
    );

    // eslint-disable-next-line react/no-unused-state
    this.state = { tags: tagsObject };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange(currTags) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ tags: { ...currTags } });
  }

  render() {
    return (
      <div>
        <div className={styles['news__heading']}>
          <div className={styles['heading__flag']} />
        </div>
        <MainNavbar />
        <SideNavbar />
        <div className={styles['news__content']}>
          <TagFilter tagNames={this.tagNames} onChange={this.onTagsChange} />
          <div className={styles['content--middle']}>
            <MonthPicker />
          </div>
          <div className={styles['content--right']}>
            <NewsPin data={{
              title: 'Lorem ipsum',
              createdAt: new Date(),
              description: 'Lorem ipsum dolor sit amet nesto nesto nesto',
              imageURL: 'https://picsum.photos/292/160',
            }}
            />
          </div>
        </div>
        <Block />
      </div>
    );
  }
}

export default News;
