import React, { Component } from "react";
import * as api from "../api";
// import { navigate } from "@reach/router";

class Article extends Component {
  state = {
    article: []
  };

  render() {
    console.log(this.props, "<---props");
    const { article } = this.state;
    console.log(article, "<--article");
    return (
      <div>
        {/* <p>{article.article_id}</p> */}
        <h1>{article.title}</h1>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <p>Posted By: {article.author}</p>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchSingleArticle();
  };
  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => this.setState(article));
  };
}

export default Article;
