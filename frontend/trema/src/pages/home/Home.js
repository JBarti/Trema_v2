import React, { Component } from "react";
import "./Home.css";
import style from "./Style";

import Block from "../../components/common/block/block";
import Navbar from "../../components/common/navbar/navbar";
import SearchBar from "../../components/common/searchBar/searchBar";
import Title from "../../components/common/title/title";
import Paraf from "../../components/common/paraf/paraf";

import pozdravnaRijec from "../../data/pozdravnaRijec";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Block style={style.block1Style}>
          <div className="block1__background" />
        </Block>
        <Navbar style={style.mainNavbarStyle}>
          <p>naslovnica</p>
          <p>novosti</p>
          <p>o nama</p>
          <p>informacije</p>
          <p>natječaji</p>
          <SearchBar />
        </Navbar>
        <Navbar style={style.sideNavbarStyle}>
          <p>raspored sati</p>
          <p>vremenik pismenih provjera</p>
          <p>tlocrt škole</p>
          <p>radno vrijeme školske knjižnice</p>
          <p>primanja roditelja</p>
        </Navbar>
        <Block style={style.block2Style}>
          <div className="image__ravnateljica" />
          <div className="block2__text">
            <Title style={style.block2TitleStyle}>
              Dragi učenici, kolege, prijatelji!
            </Title>
            <Paraf style={style.block2ParafStyle}>{pozdravnaRijec}</Paraf>
          </div>
        </Block>
        <div className="triangle-decorator" />
      </div>
    );
  }
}

export default Home;
