import React, { Component } from "react";
// import * as api from "../api";
import "./CSS/Comments.css";

class CommentInput extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div>
        <form className="commentForm">
          Post Comment:
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
