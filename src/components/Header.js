import React from "react";
import "../styles/Header.css";
import Bg from "../assets/bg.webp";
import Hidden from "@mui/material/Hidden";

function Header() {
  return (
    <div className="header">
      <Hidden smDown>
        <button className="header_btn">Read and Sign the Manifesto</button>
      </Hidden>
      <img src={Bg} alt="background image"></img>
    </div>
  );
}

export default Header;
