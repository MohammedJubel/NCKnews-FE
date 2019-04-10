import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.username);
  };

  render() {
    if (this.props.user) return this.props.children;
    return (
      <div id="Auth">
        <h3>Please Enter your Username to Login</h3>
        <form onSubmit={this.onSubmit}>
          <label>Username:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            required
          />
          <button>Login</button>
          <p>Please login with 'jessjelly' for demo purposes</p>
        </form>
      </div>
    );
  }
}
