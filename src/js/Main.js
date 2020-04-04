import React from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";

import Home from './page-types/Home';
import About from "./page-types/About";
import Contact from "./page-types/Contact";

function Main() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default Main;
