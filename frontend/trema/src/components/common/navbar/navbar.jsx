import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';
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
    <div className='navbar' style={STYLE_VARIANT_CASES[variant]}>
      {children}
    </div>
  );
};


const MainNavbar = () => (
  <Navbar variant='main'>
    <p>naslovnica</p>
    <p>novosti</p>
    <p>o nama</p>
    <p>informacije</p>
    <p>natječaji</p>
    <SearchBar />
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

console.log(Object.keys(STYLE_VARIANT_CASES));

Navbar.propTypes = {
  variant: PropTypes.oneOf(['default', 'main', 'side']),
  children: PropTypes.any,
};

Navbar.defaultProps = {
  variant: 'default',
  children: '',
};

export { MainNavbar, SideNavbar };
