import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <>
      <Navigation />
      <Header />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
