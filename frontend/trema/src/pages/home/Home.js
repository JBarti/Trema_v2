import React, { Component } from "react";
import "./Home.css";
import Block from "../../components/common/block/block";
import Navbar from "../../components/common/navbar/navbar";

const mainNavbarStyle = {
  backgroundColor: "cadetblue",
  height: "60px",
  fontSize: "18px",
  padding: "0 350px",
  opacity: "0.8",
  marginTop: "-60px",
  position: "sticky",
  top: "0"
};

const sideNavbarStyle = {
  height: "44px",
  fontSize: "14px",
  backgroundColor: "gray",
  padding: "0 100px"
};

const block1Style = {
  height: "100vh"
};

const block2Style = {
  backgroundColor: "darkgray",
  height: "800px"
};

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Block style={block1Style}>
          <div className="block1__background" />
        </Block>
        <Navbar style={mainNavbarStyle}>
          <p>naslovnica</p>
          <p>novosti</p>
          <p>o nama</p>
          <p>informacije</p>
          <p>natječaji</p>
        </Navbar>
        <Navbar style={sideNavbarStyle}>
          <p>raspored sati</p>
          <p>vremenik pismenih provjera</p>
          <p>tlocrt škole</p>
          <p>radno vrijeme školske knjižnice</p>
          <p>primanja roditelja</p>
        </Navbar>
        <Block style={block2Style} />
      </div>
    );
  }
}

export default Home;
