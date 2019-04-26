import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="search-box">
        <input className="search-txt" type="text" placeholder="Search" />
        <a className="search-btn">
          <i class="fas fa-search" />
        </a>
      </div>
    );
  }
}

export default SearchBar;
