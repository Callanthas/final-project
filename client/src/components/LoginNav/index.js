import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        </nav>
      );
    
    }
  };


export default LoginNav;
