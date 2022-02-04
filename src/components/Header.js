import React from "react";
import "../styles/Header.css";
import { Button, Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Bg from "../assets/bg.webp";
import Hidden from "@mui/material/Hidden";

function Header() {
  return (
    <div className="header">
      <Hidden smDown>
        <Button fluid>Read and Sign the Manifesto</Button>
      </Hidden>
      <img src={Bg} alt=""></img>
    </div>
  );
}

export default Header;
