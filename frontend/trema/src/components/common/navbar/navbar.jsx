import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import styleVariants from './styleVariants';
import SearchBar from '../searchBar/searchBar';


const STYLE_VARIANT_CASES = {
  default: {},
  main: styleVariants.mainNavbarStyle,
  side: styleVariants.sideNavbarStyle,
};

const Navbar = (props) => {
  const { children, variant } = props;
  return (
    <div className={styles['navbar']} style={STYLE_VARIANT_CASES[variant]}>
      {children}
    </div>
  );
};


const MainNavbar = () => (
  <Navbar variant='main'>
    <Link to='' className={styles['link_decoration']}><p>naslovnica</p></Link>
    <Link to='/novosti' className={styles['link_decoration']}><p>novosti</p></Link>
    <Link to='/aboutUs' className={styles['link_decoration']}><p>o nama</p></Link>
    <p>informacije</p>
    <p>natječaji</p>
    <div className={styles['search__container']}>
      <SearchBar isAnimated />
    </div>
  </Navbar>
);

const SideNavbar = () => (
  <Navbar variant='side'>
    <p>raspored sati</p>
    <p>vremenik pismenih provjera</p>
    <p>tlocrt škole</p>
    <p>radno vrijeme školske knjižnice</p>
    <p>primanja roditelja</p>
  </Navbar>
);

Navbar.propTypes = {
  variant: PropTypes.oneOf(['default', 'main', 'side']),
  children: PropTypes.any,
};

Navbar.defaultProps = {
  variant: 'default',
  children: '',
};

export { MainNavbar, SideNavbar };
