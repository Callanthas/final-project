import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            example: {}
        };
    }

    componentDidMount() {
        API.getExample(this.props.match.params.id)
            .then(res => {
                this.setState({ example: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onDeleteClick = () => {
        const id = this.state.example._id;
        API.deleteExample(id)
            .then(() => {
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const example = this.state.example;
        return (

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        );
    }
}

export default Login;