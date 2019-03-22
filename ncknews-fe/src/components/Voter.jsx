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

  // this.props.commentId

  // press button > handlevote() with parameter + 1 or -1 then make api request and update article inc vote with voteChange (1 or -1)> then get updated result from article

  //go on each componenet article or comments pass function as a prop which makes a api request and make general function up here

  // this.updateprops

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

//track vote change and keep in state
// disable button if vote change is 1
// disable button if vote change is -1
// votes: {votes + votes change}
