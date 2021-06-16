import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Journals from "./Journal";
import LandingPage from "./Landing";
import NewsArticles from "./NewsArticles";
import Contact from "./Contact";
import About from "./About";
import Manifesto from "./Manifesto";

const home = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/journals">
            <Journals />
          </Route>
          <Route path="/newsarticles">
            <NewsArticles />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Manifesto">
            <Manifesto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default home;
