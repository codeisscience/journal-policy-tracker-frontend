import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/home";
import Journal from "./components/Journal";
import Manifesto from "./components/Manifesto";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/manifesto" exact component={Manifesto} />
        <Route path="/journal" exact component={Journal} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
