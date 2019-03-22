import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Comments.css";

class AddComment extends Component {
  state = {
    value: "",
    newComment: ""
  };

  handleChange = event => {
    this.setState({ newComment: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const commentToAdd = {
      author: this.props.user.username,
      body: this.state.newComment
    };

    api.postNewComment(this.props.article_id, commentToAdd).then(comment => {
      this.props.commentUpdate(comment);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <b>Post New Comment:</b>
          <input onChange={this.handleChange} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
