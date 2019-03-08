import React, { Component } from "react";
import { getSingleArticle } from "../api";
import Comments from "./Comments";
import "./CSS/SingleArticle.css";
import Voter from "./Voter";

class Article extends Component {
  state = {
    article: []
  };
  componentDidMount = () => {
    getSingleArticle(this.props.article_id).then(article =>
      this.setState(article)
    );
  };
  render() {
    const { article } = this.state;
    console.log(article, "<----article");
    return (
      <div>
        <div className="articleDisplay">
          <h1>{article.title}</h1>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          <p>Posted By: {article.author}</p>
        </div>
        <div>
          <Voter votes={this.state.article.votes} id={this.state.article_id} />
          <Comments article_id={this.props.article_id} />
        </div>
      </div>
    );
  }
}

export default Article;
