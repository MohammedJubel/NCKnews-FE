import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // console.log("clickeddddddd");

    this.props.login(this.state.username);
  };

  render() {
    return (
      <div>
        <h3>Please Enter your Username to Login</h3>
        <form onSubmit={this.onSubmit}>
          <label>Username:</label>
          <input onChange={this.handleChange} type="text" name="username" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
