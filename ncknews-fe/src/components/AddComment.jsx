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
      author: this.props.user,
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
          Post Comment:
          <input onChange={this.handleChange} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddComment;

//FINDING NEW COMMENT TO POST
// make form and submit button
// need value of new comment to post --- onChange function for the (inputBox/ textarea) then write function inside and write the function out i.e. handlechange
// handlechange function has event.target.value which logs user input
// once value registered need to set state with new comment --(set state at top)
//^^React Dev tools to check state and getting right value(new Comment your posting)
//once user comment in state ready to post

//POSTING NEW COMMENT
// Need to submit data --onSubmit to Form or button if no form
// next write function handle onsubmit etc
// write api function for handling submit --axios/ await in api page
// to show new article on page you set state with new comment and spread old ones [this.state.newComment, ...comments(from state that are already there)]
