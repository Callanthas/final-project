import React, { Component } from "react";
import API from "../../utils/API";

class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      org: "",
      area: "",
      leader: "",
      students: ""
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

  submitExample = event => {
    event.preventDefault();
    debugger;
    const name = this.state.name.trim();
    const organization = this.state.org.trim();
    const area = this.state.area.trim();
    const leader = this.state.leader.trim();
    const students = this.state.students.trim();

    API.saveNewProject({
      name,
      organization,
      area,
      leader,
      students
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
    const area = this.state.area;
    const leader = this.state.leader;
    const students = this.state.students;
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Add a New Social Service Project</h1>
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
          <label htmlFor="org">Organization:</label>
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
          <label htmlFor="org">Area:</label>
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
          <label htmlFor="leader">Leader:</label>
          <input
            className="form-control"
            name="leader"
            type="text"
            placeholder="leader"
            onChange={this.handleInputChange}
            value={leader}
          />
        </div>

        <div className="form-group">
          <label htmlFor="students">Required Students:</label>
          <input
            className="form-control"
            name="students"
            type="text"
            placeholder="students"
            onChange={this.handleInputChange}
            value={students}
          />
        </div>

        <button className="btn btn-info" type="button">
                  Submit
        </button>
      </form>
    );
  }
}

export default NewProject;
