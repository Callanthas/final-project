import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

class Nav extends Component {
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
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Student inf.
              </Link>
            </li>
            <li className="nav-item active ">
                <button className="nav-link" >
                <Dropdown>
              <Dropdown.Toggle as={Dropdown} id="dropdown-custom-components">
                Event
                <a href="" onClick={this.handleClick}>
                {this.props.children}
              </a>
              </Dropdown.Toggle>
          
              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </button>
      
              </li>
    
          </ul>
        </nav>
      );
    
    }
  };


class CustomMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }
  

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className="m-12 w-auto",
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled m-5">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  }
}
export default Nav;
