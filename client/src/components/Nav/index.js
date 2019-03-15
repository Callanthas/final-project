import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">
        <Link className="nav-link" to="/admin">
          Admin          </Link>

      </h1>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">


        <li className="nav-item active">
          <Link className="nav-link" to="/newstudent">
            Add Student
          </Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/newevent">
            Add Event
          </Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/newproject">
            Add Project
          </Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/newleader">
            Add Leader
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;
