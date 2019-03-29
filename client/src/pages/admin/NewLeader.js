import React, { Component } from "react";
import API from "../../utils/API";

class NewLeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      organization: "",
      project: "",
      area: "",
      username: "",
      password: ""
    };
  }

  componentDidMount () {
    API.getAny()
    .then(res => {
      if (res.data.type !== 'admin') {
        this.props.history.push('/');
      }
    }); 
   }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitSupervisor = event => {
    event.preventDefault();
    console.log("submitting");
    const name = this.state.name.trim();
    const organization = this.state.organization.trim();
    const project = this.state.project.trim();
    const area = this.state.area.trim();
    const username = this.state.username.trim();
    const password = this.state.password.trim();

    API.signupUser({
      username,
      password,
      type: "supervisor"
    }).then(res => {
      if (res) {
        API.saveNewSupervisor({
          name,
          organization,
          project,
          area,
          username,
          password
        });
      }
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
    const { name, organization, project, area, username, password } = this.state;

    return (




      <form className="container" onSubmit={this.submitSupervisor}>
        <h1>Add a New Supervisor</h1>
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
          <label htmlFor="organization">Organization:</label>
          <input
            className="form-control"
            name="organization"
            placeholder="organization"
            onChange={this.handleInputChange}
            value={organization}
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
          <label htmlFor="username">Assigned username:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            name="password"
            type="text"
            placeholder="password"
            onChange={this.handleInputChange}
            value={password}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewLeader;
