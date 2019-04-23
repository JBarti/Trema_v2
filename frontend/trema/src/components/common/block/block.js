import React from "react";
import "./block.css";

const Block = props => {
  return <div className="block">{props.children}</div>;
};

export default Block;
