import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import logo from "../assets/linkedin.png";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HeaderOption from "./HeaderOption/HeaderOption";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="my Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/ogw/ADGmqu-gMCy0LP4Gd85RcobJKXiTq5L9AkpFi9-yoWr1=s32-c-mo"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
