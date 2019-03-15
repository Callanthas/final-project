import React, { Component } from 'react';
import API from "../utils/API";

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      hours: "",
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
    const date = this.state.date.trim();
    const hours = this.state.hours.trim();

    
      API.saveExample({
        name,
        date,
        hours
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
    const date = this.state.date;
    const hours = this.state.hours;
 
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Add a New Event</h1>
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
            Date:
          </label>
          <textarea 
            className="form-control"
            name="date" 
            placeholder="date"
            onChange={this.handleInputChange}
            value={date} />
        </div>
        <div className="form-group">
          <label
            htmlFor="hours">
            Hours Validated :
          </label>
          <input
            className="form-control" 
            name="hours" 
            type="text"
            placeholder="hours"
            onChange={this.handleInputChange} 
            value={hours} />
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

export default NewEvent;
