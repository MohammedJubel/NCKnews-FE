import React, { Component } from "react";
import * as api from "../api";
import "./CSS/Articles.css";
// import { Link } from "@reach/router";
// import Menubar from "../Menubar";
import MediaCard from "./Mediacard";
// import faker from "faker";
import Loading from "./Loading";

class Articles extends Component {
  state = {
    articles: {},
    isLoading: true
  };

  render() {
    console.log(this.state.articles, "this");
    if (this.state.isLoading) return <Loading />;
    return (
      <div>
        <div className="sortBy">
          <select onChange={this.handleChange}>
            <option disabled selected>
              Sort By
            </option>
            <option value="created_at">Dates</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
        </div>
        <div id="articlesPage">
          <MediaCard className="articledata" articles={this.state.articles} />
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
    this.setState({ isLoading: true });
    if (!sort_by) {
      sort_by = "created_at";
    }
    const { topic } = this.props;
    if (topic) {
      return api
        .getArticlesByTopic(topic)
        .then(articles => this.setState({ articles, isLoading: false }))
        .catch();
    } else {
      return api.getArticles(sort_by).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  };
}

export default Articles;
