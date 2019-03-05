import React, { Component } from "react";
import "./components/CSS/App.css";
import * as api from "./api";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Navbar topics={topics} />
        <Router>
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <Article path="/article/:article_id" />
        </Router>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    api.getTopics().then(topics => {
      // console.log(topics, "check");
      this.setState({ topics });
    });
  };
}

export default App;
