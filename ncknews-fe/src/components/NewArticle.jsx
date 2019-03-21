import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";
import "./CSS/addArticle.css";

export default class NewArticle extends Component {
  state = {
    newArticleTopic: "",
    newArticleTitle: "",
    newArticleBody: ""
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newArticle = {
      author: this.props.user.username,
      body: this.state.newArticleBody,
      title: this.state.newArticleTitle,
      topic: this.state.newArticleTopic
    };
    api.postArticle(newArticle).then(newArticle => {
      navigate(`/article/${newArticle.article_id}`);
    });
  };

  render() {
    const { topics } = this.props;
    return (
      <form className="addArticle" onSubmit={this.handleSubmit}>
        <label>Topic</label>
        <select onChange={this.handleChange} id="newArticleTopic">
          <option disabled>Choose Option</option>
          {topics.map(topic => {
            return <option>{topic.slug}</option>;
          })}
          <option />
        </select>
        <label>Title</label>
        <input
          onChange={this.handleChange}
          id="newArticleTitle"
          type="text"
          required
        />
        <br />
        <br />
        <label>Post New Article Body:</label>
        <textarea
          rows="4"
          cols="50"
          onChange={this.handleChange}
          id="newArticleBody"
          type="text"
          required
        />
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
