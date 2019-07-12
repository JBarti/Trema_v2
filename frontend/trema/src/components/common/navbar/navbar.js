import React from "react";
import "./navbar.css";
import style from "../../../pages/home/Style";
import SearchBar from "../searchBar/searchBar";

const Navbar = props => {
  return (
    <div className="navbar" style={props.style}>
      {props.children}
    </div>
  );
};


const MainNavbar = (props) => {
  return (
      <Navbar style={style.mainNavbarStyle}>
    <p>naslovnica</p>
    <p>novosti</p>
    <p>o nama</p>
    <p>informacije</p>
    <p>natječaji</p>
    <SearchBar />
  </Navbar>
  );
};

const SideNavbar = (props) => {
  return (
      <Navbar style={style.sideNavbarStyle}>
    <p>raspored sati</p>
    <p>vremenik pismenih provjera</p>
    <p>tlocrt škole</p>
    <p>radno vrijeme školske knjižnice</p>
    <p>primanja roditelja</p>
  </Navbar>
  );
};


export {MainNavbar, SideNavbar};
