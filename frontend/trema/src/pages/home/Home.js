import React, { Component } from "react";
import "./Home.css";
import Block from "../../components/common/block/block";
import Navbar from "../../components/common/navbar/navbar";

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Block>
          <div className="bloketa" />
        </Block>
        <Navbar>
          <p>naslovnica</p>
          <p>novosti</p>
          <p>o nama</p>
          <p>informacije</p>
          <p>natječaji</p>
        </Navbar>
      </div>
    );
  }
}

export default Home;
