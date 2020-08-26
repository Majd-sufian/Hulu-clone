import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <HomeIcon fontSize="large" className="header__icon" />
        <FlashOnIcon fontSize="large" className="header__icon" />
        <LiveTvIcon fontSize="large" className="header__icon" />
        <VideoLibraryIcon fontSize="large" className="header__icon" />
        <SearchIcon fontSize="large" className="header__icon" />
        <PermIdentityIcon fontSize="large" className="header__icon" />
      </div>
      <div className="header__right">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hulu_logo_%282007%29.svg/1200px-Hulu_logo_%282007%29.svg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
