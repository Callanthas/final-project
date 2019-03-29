import React, { Component } from "react";
import { Link } from "react-router-dom";
import  ADMIN  from "../../assets/icons/ADMIN.png";
import  STUDENT  from "../../assets/icons/STUDENT.png";
import  LEAD  from "../../assets/icons/LEAD.png";
import { LOGO } from "../../assets/icons/LOGO-01.png";



/* import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'; */

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
              <img className="rounded-circle" src={ADMIN} alt="admin" width="200" height="140">
              </img>

              <p className="themed-grid-col" >Click to login as Administrator. An Administrator can add new students, leads and projects.</p>

              <Link className="themed-grid-col" to="/login/admin">Administrator</Link>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Student</h4>
            </div>
            <div class="card-body">
              <img className="rounded-circle" src={STUDENT} alt="student" width="180" height="140">
              </img>
              <p className="themed-grid-col" >As a student you can see your project, leader, check-in and check-out from your community service project.</p>
              <Link className="themed-grid-col" to="/login/student">Student</Link>
            </div>
          </div>


          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Leader</h4>
            </div>
            <div class="card-body">
              <img className="rounded-circle" src={LEAD} alt="lead" width="160" height="140" />

              <p className="themed-grid-col" >Check in as a leader and/or teacher.</p>
              <Link className="themed-grid-col" to="/login/supervisor">Leader</Link>
            </div>


          </div>
        </div>

      </div>
    );
  }
}

export default LoginNav;
