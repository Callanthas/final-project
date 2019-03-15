import React, { Component } from 'react';
import API from "../utils/API";

class NewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      university: "",
      org: "",
      project: "",
      area: "",
      leader: "",
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
} 

  submitExample = (event) => {
    event.preventDefault();
    debugger;
    const name = this.state.name.trim();
    const university = this.state.university.trim();
    const org = this.state.org.trim();
    const project = this.state.project.trim();
    const area = this.state.area.trim();
    const leader = this.state.leader.trim();

    
      API.saveExample({
        name,
        university,
        org,
        project,
        area,
        leader
      }).then(() => {

        this.props.history.push('/');
      });
  }

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
    const org = this.state.org;
    const project = this.state.project;
    const area = this.state.area;
    const leader = this.state.leader;    
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Add a New Social Service Student</h1>
        <div className="form-group">
          <label
            htmlFor="name">
            Name:
          </label>
          <input
            className="form-control" 
            name="name" 
            type="text"
            placeholder="name"
            onChange={this.handleInputChange} 
            value={name} />
        </div>
        <div className="form-group">
          <label 
            htmlFor="description">
            University:
          </label>
          <textarea 
            className="form-control"
            name="university" 
            placeholder="university"
            onChange={this.handleInputChange}
            value={university} />
        </div>
        <div className="form-group">
          <label
            htmlFor="org">
            Assigned Organization:
          </label>
          <input
            className="form-control" 
            name="org" 
            type="text"
            placeholder="org"
            onChange={this.handleInputChange} 
            value={org} />
        </div>
        <div className="form-group">
          <label
            htmlFor="project">
            Assigned Project:
          </label>
          <input
            className="form-control" 
            name="project" 
            type="text"
            placeholder="project"
            onChange={this.handleInputChange} 
            value={project} />
        </div>
        <div className="form-group">
          <label
            htmlFor="area">
            Assigned Area:
          </label>
          <input
            className="form-control" 
            name="area" 
            type="text"
            placeholder="area"
            onChange={this.handleInputChange} 
            value={area} />
        </div>
        <div className="form-group">
          <label
            htmlFor="leader">
            Assigned Leader:
          </label>
          <input
            className="form-control" 
            name="leader" 
            type="text"
            placeholder="leader"
            onChange={this.handleInputChange} 
            value={leader} />
        </div>

        <button 
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewStudent;
