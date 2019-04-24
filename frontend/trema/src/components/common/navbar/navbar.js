import React from "react";
import "./navbar.css";

const Navbar = props => {
  return (
    <div className="navbar" style={props.style}>
      {props.children}
    </div>
  );
};

export default Navbar;
