import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: [],
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getStudent()
       .then(res => {
        this.setState({ student: res.data, id: "", hours: "" });
      })
      .catch(err => {
        console.log(err);
      });  
  };

  getExamplesAsList = () => {
    const examples = this.state.examples;

    const listElements = examples.map((element) => {
      console.log(element);
      return (
          <Link to={`/student/${element._id}`}>
            <p>
              {element.name}
            </p>
          </Link>
      );
    });

    if (listElements.length === 0)
      return <h3>No Results to Display</h3>;

    return <ul>{listElements}</ul>;
  }
getStudent = () =>{
  const student = this.state.student;
  const listElements = student.map((element) => {
    return (
        <Link to={`/api/student/${element._id}`}>
          <p>
            {element.studentID}

          </p>
        </Link>
    );
  });

  if (listElements.length === 0)
    return <h3>No Results </h3>;

  return <ul>{listElements}</ul>;
}

  render() {
    const student = this.getStudent();
    return (
      <div className="container">
        <h1>Hello{student}</h1>
        <h2><Clock /></h2>
        <div className="jumbotron">
          <button id="loading_bttn" ><LoadingButton /></button>
        </div>
        <Card>
          <Card.Header>Quick Information</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">StudentID: {student}</li>
                <li className="list-group-item">Project:{student}</li>
                <li className="list-group-item">Hours: {student}</li>
              </ul>
            </blockquote>
          </Card.Body>
        </Card>;
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
    const {status} = this.state;
    return status ? "Check Out" : "Check In";
  }

  render() {
    const { isLoading, status } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {
          isLoading 
          ? 'Loading…' 
          : this.getButtonTextByStatus()
        }
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
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
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