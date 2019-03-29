import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import StudentHome from "./pages/student/Home.js";
import SupervisorHome from "./pages/supervisor/Home.js";
import Events from "./pages/student/Events.js";
import NoMatch from "./pages/NoMatch";
import NewStudent from"./pages/admin/NewStudent.js";
import Admin from "./pages/admin/Admin.js";
import NewLeader from "./pages/admin/NewLeader.js";
import NewProject from "./pages/admin/NewProject.js";
import NewEvent from "./pages/admin/NewEvent.js";
import Login from "./pages/login";
import StudentLogin from "./pages/login/student";
import SupervisorLogin from "./pages/login/supervisor";
import AdminLogin from "./pages/login/admin";



class App extends Component {

  render () {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/NewStudent/" component={NewStudent} />
            <Route exact path="/NewEvent/" component={NewEvent} />
            <Route exact path="/NewLeader/" component={NewLeader} />
            <Route exact path="/NewProject/" component={NewProject} />
            <Route exact path="/Admin/" component={Admin} />
            <Route exact path="/login/student" component={StudentLogin} />
            <Route exact path="/login/supervisor" component={SupervisorLogin} />
            <Route exact path="/login/admin" component={AdminLogin} />
            <Route exact path="/student/:id" component={StudentHome} />
            <Route exact path="/supervisor/:id" component={SupervisorHome} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}


export default App;