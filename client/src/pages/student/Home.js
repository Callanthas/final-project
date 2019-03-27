import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Events from "./Events";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      university: "",
      project: "",
      username: "",
      hours: 0,
      checkin: "",
      checkout: ""
    };
  }

  componentDidMount() {
    API.getStudent(this.props.match.params.id)
    .then(res => {
      if (res.data.user) {
        const { name, university, project, username, hours, checkin, checkout } = res.data.dbModel;
        this.setState({
          name, university, project, username, hours, checkin, checkout
        });
      }
      else {
        this.props.history.push("/");
      }
    })
  }

  logout = () => {
    API.logoutUser()
    .then(res => {
      this.props.history.push("/");
    });
  }

  render() {
    const { name, university, project, username, hours, checkin, checkout } = this.state;
    return (
      <div className="container">
        <h1>Hello {name}</h1>
        <h2>
          <Clock />
        </h2>
       <h2 id="event"><Events/></h2>
        <div className="jumbotron">
        <button className="btn btn-info" type="button">        
        
                    <LoadingButton />
          </button>
        </div>
        <Card>
          <Card.Header>Quick Information</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">StudentID: {username}</li>
                <li className="list-group-item">Project: {project}</li>
                <li className="list-group-item">Hours: {hours}</li>
              </ul>
            </blockquote>
          </Card.Body>
        </Card>
        <button className="btn btn-info" type="button" onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
      loggedIn: false
    };
  }


  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false, status: !this.state.status });
      });
    });
  }

  getButtonTextByStatus = () => {
    const { status } = this.state;
    return status ? "Check Out" : "Check In";
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? "Loading…" : this.getButtonTextByStatus()}
      </Button>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Home;
