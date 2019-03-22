import React, { Component } from "react";
import { deleteArticleById, getArticleById } from "../api";
import Comments from "./Comments";
import "./CSS/SingleArticle.css";
import Voter from "./Voter";
import { navigate } from "@reach/router";

class Article extends Component {
  state = {
    article: {}
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => this.setState({ article }));
  };

  deleteClick = () => {
    const { article_id } = this.props;
    deleteArticleById(article_id).then(() => {
      navigate("/");
    });
  };

  render() {
    const { article } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div className="articleDisplay">
          <h1>{article.title}</h1>
          {user.username === article.author && (
            <button onClick={() => this.deleteClick(article.article_id)}>
              <b>Delete Article?</b>
            </button>
          )}
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          <p>Posted By: {article.author}</p>
          <Voter
            votes={this.state.article.votes}
            articleId={this.state.article.article_id}
          />
        </div>
        <br />
        <div>
          <Comments article_id={this.props.article_id} user={user} />
        </div>
      </div>
    );
  }
}

export default Article;
