import React, { Component } from "react";
import { Link } from "react-router-dom";
import ADMIN from "../../../assets/icons/ADMIN.png";
import STUDENT from "../../../assets/icons/STUDENT.png";
import LEAD from "../../../assets/icons/LEAD.png";
//import { LOGO } from "../../../assets/icons/LOGO-01.png";

class LoginNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Administrator</h4>
            </div>
            <div class="card-body">
              <img
                className="rounded-circle"
                src={ADMIN}
                alt="admin"
                width="200"
                height="140"
              />

              <p className="themed-grid-col">
                Login as Administrator if you are in charge of adding new
                projects, new leaders and new students to UCSR and help them
                optimize their activity.
              </p>

              <Link className="themed-grid-col" to="/login/admin">
                Administrator
              </Link>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Student</h4>
            </div>
            <div class="card-body">
              <img
                className="rounded-circle"
                src={STUDENT}
                alt="student"
                width="180"
                height="140"
              />
              <p className="themed-grid-col">
                Login as a student if you have an assigned community service
                project, to check-in and check-out from it and keep track of
                your accoumulated hours.
              </p>
              <Link className="themed-grid-col" to="/login/student">
                Student
              </Link>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Leader</h4>
            </div>
            <div class="card-body">
              <img
                className="rounded-circle"
                src={LEAD}
                alt="lead"
                width="160"
                height="140"
              />

              <p className="themed-grid-col">
                Login as a leader if you are in charge of a community service
                project from an organization and be able to see which students
                are checking-in to your project.{" "}
              </p>
              <Link className="themed-grid-col" to="/login/supervisor">
                Leader
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginNav;
