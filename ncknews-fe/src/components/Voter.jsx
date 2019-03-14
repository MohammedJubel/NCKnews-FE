import React, { Component } from "react";
import { handleVote } from "../api";

export default class Voter extends Component {
  state = {
    voteCount: 0
  };

  handleVote = () => {};

  render() {
    return (
      <div>
        <button className="upvote" onClick={() => this.handleVote(1)}>
          Vote Up
        </button>

        <button className="downvote" onClick={() => this.handleVote(-1)}>
          Vote Down
        </button>
      </div>
    );
  }
}
