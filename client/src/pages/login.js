import React, { Component } from "react";
import API from "../utils/API";
import LoginNav from "../components/LoginNav";
import logo from "../assets/icons/LOGO-01.png";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">

            <img className="rounded-circle" src={logo} alt="logo" width="250" height="200">
            </img>
            <h1>Hello! </h1>
            <div>Welcome to the UCSR - Unified Community Service Register. Please log-in
                        by choosing your role from the links in the navigation bar below.
  </div>
            <br />
            <div>
              The UCSR system aims to simplify the tracking of Social Service
                          hours for universities, students and institutions.
</div>
          </div>
        </div>
        <br /><br />
        <LoginNav />
      </div>
    );
  }
}

export default Login;
