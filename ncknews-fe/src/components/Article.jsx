import React, { Component } from "react";
import { getArticleById } from "../api";
import Comments from "./Comments";
import "./CSS/SingleArticle.css";
import Voter from "./Voter";

class Article extends Component {
  state = {
    article: {}
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => this.setState({ article }));
  };

  render() {
    const { article } = this.state;
    return (
      <div>
        <div className="articleDisplay">
          <h1>{article.title}</h1>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          <p>Posted By: {article.author}</p>
        </div>
        <div>
          <Voter
            votes={this.state.article.votes}
            articleId={this.state.article.article_id}
          />
          <Comments article_id={this.props.article_id} user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default Article;
