import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/student/Home.js";
import Events from "./pages/student/Events.js";
import NoMatch from "./pages/NoMatch";
import AdminNav from "./components/AdminNav";
import StudentNav from "./components/StudentNav";
import NewStudent from"./pages/admin/NewStudent.js";
import Admin from "./pages/admin/Admin.js";
import NewLeader from "./pages/admin/NewLeader.js";
import NewProject from "./pages/admin/NewProject.js";
import NewEvent from "./pages/admin/NewEvent.js";
import Login from "./pages/login";
import LoginNav from "./components/LoginNav";


function getNav(currentRole) {
  switch(currentRole) {
    case 'ADMIN':
      return <AdminNav/>;
    case 'STUDENT':
      return <StudentNav/>;
    case 'TEACHER':
      return <LoginNav/>;
    default:
      return <LoginNav/>;
  }
}

function App() {
  const role = new Array("ADMIN", "STUDENT", "TEACHER");
  const currentRole = "STUDENT"

  return (
    <Router>
      <>
      {getNav(currentRole)}
        <Switch>

        <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
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