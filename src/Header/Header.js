import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import logo from "../assets/linkedin.png";
function Header() {
  return (
    <div className="header">
      <h1>header</h1>
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
