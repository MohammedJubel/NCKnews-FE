import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Articles.css";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    const { articles } = this.state;

    return (
      <div className="articleSection">
        <div className="optionBar">
          <p>Sort by</p>
          <select onChange={this.handleChange}>
            <option value="created_at">Dates</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
        </div>

        <p>Total Articles = {`${articles.length}`}</p>
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
  handleChange = event => {
    this.fetchArticles(event.target.value);
  };

  fetchArticles = sort_by => {
    if (!sort_by) {
      sort_by = "created_at";
    }
    const { topic } = this.props;
    if (topic) {
      return api
        .getArticlesByTopic(topic)
        .then(articles => this.setState(articles));
    } else {
      return api.getArticles(sort_by).then(articles => {
        this.setState(articles);
      });
    }
  };
}

export default Articles;
