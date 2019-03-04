import React, { Component } from "react";
import * as api from "../api";
import "./CSS/article.css";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    console.log("rendering");
    console.log(articles, "<-----articles");
    return (
      <div>
        <h1>Articles</h1>
        <p>Total Articles = {`${articles.length}`}</p>
        <div>
          {articles.map(article => (
            <div key={article.article_id} className="articledata">
              <div>Topic: {article.topic}</div>
              <div>Title: {article.title}</div>
              <div>Author: {article.author}</div>
              <div>Created At: {article.created_at.substring(0, 10)}</div>
              {/* <div>{article.body.substring(0, 250)}</div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    console.log("cdm");
    this.fetchArticles();
  };
  fetchArticles = () => {
    console.log("fetching articles in cdm");
    api.getArticles().then(articles => {
      this.setState(articles);
    });
  };
}

//Get Articles Method :
// imported axios
// got BASE_URL
// made function to get Articles which return the articles data as a promise.
//exported this articles data to the articles component

// made function to fetch Article Data which is a promise
// and set the article data to state
// then did component did mount

export default Articles;
