<!-- import React, { Component } from "react";
import { postArticle } from "../api";

export class NewArticle extends Component {
  state = {
    newArticleTitle: "",
    newArticleBody: ""
  };

  handleChange = text => {
    this.setState({
      newArticleTitle: text,
      newArticleBody: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newArticle = {
      title: this.state.newArticleTitle,
      body: this.state.newArticleBody,
      author: "jessjelly",
      topic: "coding"
    };
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={event => this.handleChange(event.target.value)}>
          Body
        </textarea>
        <button type="submit">Add Article</button>
      </form>
    );
  }
}

export default NewArticle; -->
