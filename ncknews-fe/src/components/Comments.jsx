import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Comments.css";
import AddComment from "./AddComment";
import Voter from "./Voter";
import { navigate } from "@reach/router";

export class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { comments } = this.state;
    const { article_id, user } = this.props;
    // console.log(article_id, "check");

    console.log(comments, "<---comments");
    return (
      <div>
        <div>
          <AddComment
            user={user}
            article_id={article_id}
            commentUpdate={this.newCommentUpdater}
          />
        </div>
        <div>
          {comments.map(comment => {
            return (
              <div>
                <div className="comments">
                  <Voter />
                  <p>{comment.author}</p>
                  <p>{comment.body}</p>
                  <button
                    onClick={() => this.deleteComment(comment.comment_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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
  newCommentUpdater = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };
  deleteComment = comment_id => {
    api.deleteCommentById(comment_id).then(res => {
      const updatedComments = this.state.comments.filter(comment => {
        if (comment.comment_id !== comment_id) return comment;
      });
      this.setState({ comments: [...updatedComments] });
    });
  };
}
export default Comments;
