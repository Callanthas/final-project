import React, { Component } from 'react';
import API from '../../utils/API';

class AdminLogin extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        const username = this.state.username.trim();
        const password = this.state.password.trim();
        const type = "admin";

        API.loginUser({
            username,
            password
        })
        .then(res => {
          const admin = res.data;
          if (admin) {
            this.props.history.push('/admin');
          }
        })

    }
    render() { 

        const { username, password } = this.state;
        return ( 
            <div>
            <form className="container" onSubmit={this.submitForm}>
        <h1>Administrator Login</h1>
        <div className="form-group">
          <label
            htmlFor="name">
            Username:
          </label>
          <input
            className="form-control" 
            name="username" 
            type="text"
            placeholder="username"
            onChange={this.handleInputChange} 
            value={username} />
        </div>
        <div className="form-group">
          <label
            htmlFor="password">
            Password:
          </label>
          <input
            className="form-control" 
            name="password" 
            type="password"
            placeholder="password"
            onChange={this.handleInputChange} 
            value={password} />
        </div>
  
      <button 
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
        </div>
         );
    }
}
 
export default AdminLogin;