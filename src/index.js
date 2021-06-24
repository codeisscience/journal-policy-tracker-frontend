import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <LandingSection />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
