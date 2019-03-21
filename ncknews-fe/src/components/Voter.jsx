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

//track vote change and keep in state
// disable button if vote change is 1
// disable button if vote change is -1
// votes: {votes + votes change}
