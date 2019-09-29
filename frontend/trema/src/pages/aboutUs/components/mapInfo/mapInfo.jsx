import React from 'react';
import PropTypes from 'prop-types';
import styles from './mapInfo.module.css';


class MapInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { data } = this.props;
    const {
      address, phoneNumber, email, owner,
    } = data;

    return (
      <div className={styles['map__info__container']}>
        <div className='mapouter'>
          <div className='gmap_canvas'>
            <iframe title='map' width='950' height='750' src='https://maps.google.com/maps?q=matice%20hrvatske%2011&t=&z=15&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' />
            <a href='https://www.embedgooglemap.net/blog/best-wordpress-themes/' />
          </div>
        </div>
        <div className={styles['info__text']}>
          <div className={styles['text__address']}>{address}</div>
          <div className={styles['text__phoneNumber']}>
            {phoneNumber[0]}
            {owner[0]}
          </div>
          <div className={styles['text__phoneNumber']}>
            {phoneNumber[1]}
            {owner[1]}
          </div>
          <div className={styles['text__phoneNumber']}>
            {phoneNumber[2]}
            {owner[2]}
          </div>
          <div className={styles['text__email']}>{email}</div>
        </div>
      </div>
    );
  }
}


export default MapInfo;


MapInfo.propTypes = {
  data: PropTypes.shape({
    imageURL: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
