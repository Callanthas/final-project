import React, { Component } from "react";
import API from "../utils/API";
import LoginNav from "../components/LoginNav";
import logo from "../assets/icons/LOGO-01.png";
import  studentsfoto  from "../../src/assets/icons/studentsfoto.jpg";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (

      <div id="logindiv">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" colorText="white">
        UCSR - Unified Community Service Register
        </nav>
        <div className="card" id="foto" src={studentsfoto} >
        <img className="rounded-circle" src={logo} alt="logo" width="200" height="170">
          </img>
          <div  src={studentsfoto} alt="logo" width="100%" height="100%">
         
            <h1>Hello! </h1>
            <div>   Welcome to the UCSR - Unified Community Service Register.
              <br />
                Please log-in by choosing your role from the links in the navigation bar below.
              </div>
            <br />
            <div>
              The UCSR system aims to simplify the tracking of community service
                          hours for universities, students and institutions.
                          </div>
                                   <br />            <br />            <br />
                           <br />            <br />            <br />            <br />            <br />
                           <br />            <br />            <br />            <br />            <br />
                           <br />            <br />            <br />            <br />            <br />
                           <br />            <br />            <br />            <br />            <br />
                            

          </div>
        </div>
        <br /><br />
        <LoginNav />

      </div>
    );
  }
}

export default Login;
