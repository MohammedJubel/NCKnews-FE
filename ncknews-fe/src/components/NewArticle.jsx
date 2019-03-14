import React, { Component } from "react";

export default class NewArticle extends Component {
  state = {
    newArticle: ""
  };

  handleChange = event => {
    console.log(this.state.newArticle, "log");
    this.setState({ newArticle: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <b>Post New Article:</b>
          <br />
          <textarea
            rows="4"
            cols="50"
            onChange={this.handleChange}
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
