import React from "react";
import "./title.css";

let Title = props => {
  return (
    <div style={props.style} className="title">
      {props.children}
    </div>
  );
};

export default Title;
