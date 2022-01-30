import React from "react";
import "../styles/Header.css";
import Bg from "../assets/bg.webp";
import { Button, Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div className="header">
      <Jumbotron fluid>
        <Button fluid>Read and Sign the Manifesto</Button>
      </Jumbotron>
      <img src={Bg} alt=""></img>
    </div>
  );
}

export default Header;
