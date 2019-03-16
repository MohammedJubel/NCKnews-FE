import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

export default class NewArticle extends Component {
  state = {
    newArticleTopic: "",
    newArticleTitle: "",
    newArticleBody: ""
  };

  handleChange = event => {
    // console.log(this.state.newArticleBody, "log");
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newArticle = {
      author: this.props.user,
      body: this.state.newArticleBody,
      title: this.state.newArticleTitle,
      topic: this.state.newArticleTopic
    };
    api.postArticle(newArticle).then(newArticle => {
      navigate(`/article/${newArticle.article_id}`);
      // console.log(res, "res");
      console.log(newArticle, "article");
    });
  };

  render() {
    const { topics } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Topic
          <select onChange={this.handleChange} id="newArticleTopic">
            {topics.map(topic => {
              return <option>{topic.slug}</option>;
            })}
            <option />
          </select>
          Title
          <input
            onChange={this.handleChange}
            id="newArticleTitle"
            type="text"
          />
          <br />
          <br />
          Post New Article Body:
          <textarea
            rows="4"
            cols="50"
            onChange={this.handleChange}
            id="newArticleBody"
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
