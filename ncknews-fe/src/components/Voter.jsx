import React, { Component } from "react";
import { voteOnItem, voteOnArticle } from "../api";

export default class Voter extends Component {
  state = {
    voteAdjust: 0
  };

  handleVote = voteChange => {
    voteOnItem(this.props.commentId, this.props.articleId, voteChange).then(
      () => {
        this.setState({ voteAdjust: voteChange });
      }
    );
  };

  render() {
    return (
      <div>
        <button
          disabled={this.state.voteAdjust === 1}
          onClick={() => this.handleVote(1)}
        >
          Vote Up
        </button>

        {this.state.voteAdjust + this.props.votes}

        <button
          disabled={this.state.voteAdjust === -1}
          onClick={() => this.handleVote(-1)}
        >
          Vote Down
        </button>
      </div>
    );
  }
}
