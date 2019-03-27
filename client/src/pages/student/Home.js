import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      checkout: "",
      check: false
    };
  }

  componentDidMount() {
    API.getAny()
      .then(res => {
        if (res.data.type !== 'student') {
          this.props.history.push('/');
        }
        else {
          API.getStudent(this.props.match.params.id)
    .then(res => {
        const { name, university, project, username, hours, checkin, checkout } = res.data.dbModel;
        this.setState({
          name,
          university,
          project,
          username,
          hours,
          checkin,
          checkout
        });
    })
        }
    });
  }

  logout = () => {
    API.logoutUser().then(res => {
      this.props.history.push("/");
    });
  };

  render() {
    const {
      name,
      university,
      project,
      username,
      hours,
      checkin,
      checkout
    } = this.state;
    const id = this.props.match.params.id;
    return (
      <div className="container">
        <h1>Hello {name}</h1>
        <h2>
          <Clock />
        </h2>
        <div className="jumbotron">
          <LoadingButton id={id} />
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
        <button className="btn btn-info" type="button" onClick={this.logout}>
          Log out
        </button>
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

  handleClick = () => {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false, status: !this.state.status });
      });
    });
    if (this.state.check) {
      API.saveCheckOut(this.props.id, { checkOut: new Date() }).then(res => {});
      this.setState({ check: false });
    } else {
      API.saveCheckIn(this.props.id, { checkIn: new Date() }).then(res => {});
      this.setState({ check: true });
    }
  };

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
