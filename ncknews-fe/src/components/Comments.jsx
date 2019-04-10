import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Comments.css";
import AddComment from "./AddComment";
import Voter from "./Voter";
import Loading from "./Loading";

export class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  render() {
    const { comments } = this.state;
    const { article_id, user } = this.props;
    if (this.state.isLoading) return <Loading />;
    // console.log(article_id, "check");
    // console.log(comments, "<---comments");
    return (
      <div>
        <div>
          <AddComment
            user={user}
            article_id={article_id}
            commentUpdate={this.newCommentUpdater}
          />
          <br />
        </div>
        <div>
          {comments.map(comment => {
            return (
              <div className="comments">
                <div key={comment.comment_id}>
                  <b>
                    {comment.author}
                    <br />
                  </b>
                  <small>
                    {comment.created_at.substring(0, 10)}
                    <br />
                  </small>

                  {user === comment.author && (
                    <button
                      onClick={() => this.deleteComment(comment.comment_id)}
                    >
                      <b>Delete Comment?</b>
                    </button>
                  )}
                  <p>{comment.body}</p>
                  <Voter commentId={comment.comment_id} votes={comment.votes} />
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
    api
      .getComments(article_id)
      .then(comments => this.setState({ comments, isLoading: false }));
  };
  newCommentUpdater = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };
  deleteComment = comment_id => {
    api.deleteCommentById(comment_id).then(() => {
      const updatedComments = this.state.comments.filter(comment => {
        if (comment.comment_id !== comment_id) return comment;
      });
      this.setState({ comments: [...updatedComments] });
    });
  };
}
export default Comments;
