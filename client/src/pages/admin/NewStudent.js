import React, { Component } from "react";
import API from "../../utils/API";

class NewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      university: "",
      project: "",
      id: "",
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

  submitStudent = event => {
    event.preventDefault();
    const name = this.state.name.trim();
    const university = this.state.university.trim();
    const project = this.state.project.trim();
    const studentID = this.state.id.trim();
    const password = this.state.password.trim();
    console.log(name, university, project, studentID, password);
    API.signupUser({
      username: studentID,
      password,
      type: "student"
    }).then(res => {
      if (res) {
        API.saveNewStudent({
          name,
          university,
          project,
          username: studentID,
          userID: res.data._id
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
    const { name, university, project, id, password } = this.state;
    return (
      <form className="container" onSubmit={this.submitStudent}>
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

        <div className="form-group">
          <label htmlFor="id">Password:</label>
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

export default NewStudent;
