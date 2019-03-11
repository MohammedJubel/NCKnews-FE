import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Articles.css";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;

    return (
      <div className="articleSection">
        <p>Sort by</p>
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
    this.fetchArticles();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles();
    }
  };
  fetchArticles = () => {
    const { topic } = this.props;
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
