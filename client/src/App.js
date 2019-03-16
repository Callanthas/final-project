import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/main.css";

import Home from "./pages/Home";

//import Events from "./pages/Events";

import NoMatch from "./pages/NoMatch";
import NewStudent from"./pages/NewStudent";
import NewEvent from"./pages/NewEvent";
import NewLeader from"./pages/NewLeader";
import NewProject from"./pages/NewProject";
import Admin from"./pages/Admin";
import Nav from "./components/Nav";





function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/NewStudent/" component={NewStudent} />
          <Route exact path="/NewEvent/" component={NewEvent} />
          <Route exact path="/NewLeader/" component={NewLeader} />
          <Route exact path="/NewProject/" component={NewProject} />
          <Route exact path="/Admin/" component={Admin} />

          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;