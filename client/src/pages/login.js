import React, { Component } from 'react';
import API from "../utils/API";
import LoginNav from "../components/LoginNav";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        
        return (
            <div>
                <LoginNav></LoginNav>
                <div className="card">
                <div className="card-body">
                    Hello! Here you can log-in
                    <br></br>
                </div>
            </div>
            </div>

        );
    }
}


export default Login;
