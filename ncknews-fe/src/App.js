import React, { Component } from "react";
import "./components/CSS/App.css";
import * as api from "./api";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";
import Auth from "./components/Auth";

class App extends Component {
  state = {
    topics: [],
    user: "jessjelly"
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Navbar topics={topics} />
        <Header />
        <Router>
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <Article path="/article/:article_id" user={this.state.user} />
          <NewArticle path="/post" />
        </Router>
        {/* <Auth
            path="/login"
            user={this.state.user}
            login={this.setUserInState}
          /> */}
        {/* </Auth> */}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  setUserInState = username => {
    api.getSingleUser(username).then(user => this.setState({ user }));
  };
  removeUserInState = () => {
    this.setState({ user: "" });
  };
}

export default App;
