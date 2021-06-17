import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/home";

function App() {
  return (
    <Nav />
    // <Home />
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
