import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
