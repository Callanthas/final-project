import React, { Component } from "react";
import API from "../../utils/API";

class NewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      university: "",
      project: "",
      id: ""
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
    const name = this.state.name.trim();
    const university = this.state.university.trim();
    const project = this.state.project.trim();
    const studentID = this.state.id.trim();

    API.saveNewStudent({
      name,
      university,
      project,
      studentID
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
    const university = this.state.university;
    const project = this.state.project;
    const id = this.state.id;
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Add a New Social Service Student</h1>
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
          <label htmlFor="description">University:</label>
          <textarea
            className="form-control"
            name="university"
            placeholder="university"
            onChange={this.handleInputChange}
            value={university}
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
          <label htmlFor="id">Assigned ID:</label>
          <input
            className="form-control"
            name="id"
            type="text"
            placeholder="id"
            onChange={this.handleInputChange}
            value={id}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewStudent;
