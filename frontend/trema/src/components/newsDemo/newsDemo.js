import React from "react";
import Title from "../common/title/title";
import Paraf from "../common/paraf/paraf";
import Style from "../../pages/home/Style";
import "./newsDemo.css";

const NewsDemo = props => {
  return (
    <div className="newsDemo">
      <Title style={Style.newsDemoTitleStyle}>{props.title}</Title>
      <Paraf>{props.text}</Paraf>
    </div>
  );
};

export default NewsDemo;
