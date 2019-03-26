import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Supervisor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            organization: "",
            project: "",
            area: "",
            username: ""
        };
    }

    componentDidMount() {
        API.getByType('supervisors', this.props.match.params.id)
        .then(res => {
            console.log(res.data);
          if (res.data.user) {
            const { name, organization, project, area, username } = res.data.dbModel;
            this.setState({
              name, organization, project, area, username
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
        const examplesList = this.getExamplesAsList();
        return (
            <div className="container">
                <h1>Hello Teacher</h1>
                <h2><Clock /></h2>
                <div className="jumbotron">
                    {examplesList}
                    <LoadingButton />
                </div>
                <Card>
                    <Card.Header>Quick Information</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <ul className="list-group list-group-flush"> Students Waiting For Approval
                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
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
        };
    }

    handleClick() {
        this.setState({ isLoading: true }, () => {
            simulateNetworkRequest().then(() => {
                this.setState({ isLoading: false });
            });
        });
    }

    render() {
        const { isLoading } = this.state;

        return (
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? this.handleClick : null}
            >
                {isLoading ? 'Loading…' : 'in'}
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
export default Supervisor;