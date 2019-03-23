import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Teacher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            examples: [],
            title: "",
            description: ""
        };
    }

    componentDidMount() {
        this.loadExamples();
    }

    loadExamples = () => {
        API.getExamples()
            .then(res => {
                this.setState({ examples: res.data, title: "", description: "" });
            })
            .catch(err => {
                console.log(err);
            });
    };

    getExamplesAsList = () => {
        const examples = this.state.examples;

        const listElements = examples.map((element) => {
            return (
                <li key={element._id}>
                    <Link to={`/example/${element._id}`}>
                        <p>
                            {element.title}
                        </p>
                    </Link>
                </li>
            );
        });

        if (listElements.length === 0)
            return <h3>No Results to Display</h3>;

        return <ul>{listElements}</ul>;
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
export default Teacher;