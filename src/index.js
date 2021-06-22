import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
