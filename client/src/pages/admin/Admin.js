import React, { Component } from "react";
import API from "../../utils/API";

class Admin extends Component {
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
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    //const example = this.state.example;
    return (
      <div class="card">
        <div class="card-body">
          Hello Administrator! Now you can add new leaders, students, events and
          projects.
          <br />
          Check the guide bellow if you have any doubts.{" "}
        </div>
        
      </div>
    );
  }
}

export default Admin;
