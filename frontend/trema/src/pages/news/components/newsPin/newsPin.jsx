import React from 'react';
import PropTypes from 'prop-types';
import styles from './newsPin.module.css';


class NewsPin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
    };

    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded() {
    this.setState({ imageLoaded: true });
  }

  render() {
    const { data } = this.props;
    const { imageURL, title, description } = data;
    const { imageLoaded } = this.state;
    const imageClassName = `
    ${styles['news__image']} 
    ${imageLoaded ? ' ' : styles['news__image--loading']}
    `;

    return (
      <div className={styles['news__container']}>
        <img
          src={imageURL}
          className={imageClassName}
          alt='news'
          onLoad={this.imageLoaded}
        />
        <div className={styles['news__text']}>
          <div className={styles['news__title']}>
            {title}
          </div>
          <div className={styles['news__description']}>
            {description}
          </div>
        </div>
      </div>
    );
  }
}


export default NewsPin;

NewsPin.propTypes = {
  data: PropTypes.shape({
    imageURL: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
