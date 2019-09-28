import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Experience from "./components/experience.jsx";
import PollsTab from "./components/pollsTab.jsx";

const Router = () => (
  <Switch>
    <Route path="/polls">
      <PollsTab />
    </Route>
    <Route path="/experience">
      <Experience />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Router;
