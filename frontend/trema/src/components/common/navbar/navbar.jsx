import React from 'react';
import './navbar.css';
import styleVariants from '../../../pages/home/Style';
import SearchBar from '../searchBar/searchBar';

const Navbar = (props) => {
  const { children, style } = props;
  return (
    <div className='navbar' style={style}>
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

export { MainNavbar, SideNavbar };
