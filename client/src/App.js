import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import ExampleForm from "./pages/ExampleForm";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import NewStudent from"./pages/NewStudent";
import NewEvent from"./pages/NewEvent";
import NewLeader from"./pages/NewLeader";
import NewProject from"./pages/NewProject";



function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example/:id" component={Example} />
          <Route exact path="/newexample" component={ExampleForm} />
          <Route exact path="/NewStudent/" component={NewStudent} />
          <Route exact path="/NewEvent/" component={NewEvent} />
          <Route exact path="/NewLeader/" component={NewLeader} />
          <Route exact path="/NewProject/" component={NewProject} />

          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;