import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Article.css";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    console.log("rendering");
    // console.log(articles, "<-----articles");
    return (
      <div className="articleSection">
        <h1>Articles</h1>
        {/* <p>Total Articles = {`${articles.length}`}</p> */}
        <div>
          {articles.map(article => (
            <Link
              to={`/article/${article.article_id}`}
              key={article.article_id}
            >
              <div key={article.article_id} className="articledata">
                <div>Topic: {article.topic}</div>
                <div>Title: {article.title}</div>
                <div>Author: {article.author}</div>
                <div>Created At: {article.created_at.substring(0, 10)}</div>
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    // console.log("cdm");
    this.fetchArticles();
  };
  fetchArticles = () => {
    const { topic } = this.props;
    // console.log(topic, "<------topic");
    if (topic) {
      return api
        .getArticlesByTopic(topic)
        .then(articles => this.setState(articles));
    } else {
      return api.getArticles().then(articles => {
        this.setState(articles);
      });
    }
  };
}

export default Articles;
