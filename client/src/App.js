import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import StudentHome from "./pages/student/Home";
import SupervisorHome from "./pages/supervisor/Home";
import Events from "./pages/student/Events";
import NoMatch from "./pages/NoMatch";
import NewStudent from"./pages/admin/NewStudent";
import Admin from "./pages/admin";
import NewSupervisor from "./pages/admin/NewSupervisor";
import NewProject from "./pages/admin/NewProject";
import NewEvent from "./pages/admin/NewEvent";
import Login from "./pages/login";
import StudentLogin from "./pages/login/Student";
import SupervisorLogin from "./pages/login/Supervisor";
import AdminLogin from "./pages/login/Admin";



class App extends Component {

  render () {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login/student" component={StudentLogin} />
            <Route exact path="/login/supervisor" component={SupervisorLogin} />
            <Route exact path="/login/admin" component={AdminLogin} />
            <Route exact path="/student/:id" component={StudentHome} />
            <Route exact path="/supervisor/:id" component={SupervisorHome} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/student/" component={NewStudent} />
            <Route exact path="/admin/event/" component={NewEvent} />
            <Route exact path="/admin/supervisor/" component={NewSupervisor} />
            <Route exact path="/admin/project" component={NewProject} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}


export default App;