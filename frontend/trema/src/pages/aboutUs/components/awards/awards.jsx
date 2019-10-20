import React from 'react';
import PropTypes from 'prop-types';
import Medal from './components/medal';
import styles from './awards.module.css';
import Carousel from '../../../../components/common/carousel/carousel';

class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const { medalList } = data;
    const allMedals = medalList.map(medal => (
      <Medal data={{ medal }} />
    ));

    return (
      <div className={styles['awards__container']}>
        <p className={styles['awards__label']}>Nagrade</p>
        <br />
        <Carousel
          elements={allMedals}
          step={3}
        />
      </div>
    );
  }
}

export default Awards;

Awards.propTypes = {
  data: PropTypes.shape({
    medalList: PropTypes.array,
  }).isRequired,
};
