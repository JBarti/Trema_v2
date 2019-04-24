import React from "react";
import "./block.css";

const Block = props => {
  return (
    <div className="block" style={props.style}>
      {props.children}
    </div>
  );
};

export default Block;
