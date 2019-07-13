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
  const { children, style } = props;
  return (
    <div className='navbar' style={STYLE_VARIANT_CASES[style]}>
      {children}
    </div>
  );
};


const MainNavbar = () => (
  <Navbar style={styleVariants.mainNavbarStyle}>
    <p>naslovnica</p>
    <p>novosti</p>
    <p>o nama</p>
    <p>informacije</p>
    <p>natječaji</p>
    <SearchBar />
  </Navbar>
);

const SideNavbar = () => (
  <Navbar style={styleVariants.sideNavbarStyle}>
    <p>raspored sati</p>
    <p>vremenik pismenih provjera</p>
    <p>tlocrt škole</p>
    <p>radno vrijeme školske knjižnice</p>
    <p>primanja roditelja</p>
  </Navbar>
);

Navbar.propTypes = {
  style: PropTypes.oneOf(Object.keys(STYLE_VARIANT_CASES)),
  children: PropTypes.elementType,
};

Navbar.defaultProps = {
  style: 'default',
  children: '',
};

export { MainNavbar, SideNavbar };
