import React, { Component } from "react";
import API from "../../utils/API";

class NewLeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      org: "",
      project: "",
      area: "",
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitExample = event => {
    event.preventDefault();
    debugger;
    const name = this.state.name.trim();
    const organization = this.state.org.trim();
    const project = this.state.project.trim();
    const area = this.state.area.trim();
    const username = this.state.username.trim();
    const password = this.state.password.trim();

    API.saveNewSupervisor({
      name,
      organization,
      project,
      area,
      username,
      password
    }).then(() => {
      this.props.history.push("/");
    });
  };

  /* areInputsValid = (title, description) => {
    if(!title) {
      alert("Please fill out the title");
      return false;
    }

    if(!description) {
      alert("Please fill out the description");
      return false;
    }

    return true;
  } */

  render() {
    const name = this.state.name;
    const org = this.state.org;
    const project = this.state.project;
    const area = this.state.area;
    const username = this.state.username;
    const password = this.state.password;

    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Add a New Leader</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="name"
            onChange={this.handleInputChange}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="org">Assigned Organization:</label>
          <input
            className="form-control"
            name="org"
            type="text"
            placeholder="org"
            onChange={this.handleInputChange}
            value={org}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project">Assigned Project:</label>
          <input
            className="form-control"
            name="project"
            type="text"
            placeholder="project"
            onChange={this.handleInputChange}
            value={project}
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Assigned Area:</label>
          <input
            className="form-control"
            name="area"
            type="text"
            placeholder="area"
            onChange={this.handleInputChange}
            value={area}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Assigned Username:</label>
          <input
            className="form-control"
            name="username"
            type="text"
            placeholder="username"
            onChange={this.handleInputChange}
            value={username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Assigned Password:</label>
          <input
            className="form-control"
            name="password"
            type="text"
            placeholder="password"
            onChange={this.handleInputChange}
            value={password}
          />
        </div>

        <button className="btn btn-info" type="button">
                  Submit
        </button>
      </form>
    );
  }
}

export default NewLeader;
