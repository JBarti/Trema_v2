import React from "react";
import "./paraf.css";

let Paraf = props => {
  return (
    <div style={props.style} className="paraf">
      {props.children}
    </div>
  );
};

export default Paraf;
