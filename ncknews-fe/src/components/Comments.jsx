import React, { Component } from "react";
import * as api from "../api";

export class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    console.log(article_id, "check");

    console.log(comments, "<---comments");
    return (
      <div>
        {comments.map(comment => {
          return (
            <div className="comments">
              <p>{comment.author}</p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchComments();
  };
  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(comments => this.setState(comments));
  };
}

export default Comments;
