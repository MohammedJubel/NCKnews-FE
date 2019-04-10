import React, { Component } from "react";
import "./components/CSS/App.css";
import * as api from "./api";
import { Router } from "@reach/router";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";
import Auth from "./components/Auth";
import Navigation from "./components/Navigation";
import ls from "local-storage";

class App extends Component {
  state = {
    topics: [],
    user: ls.get("user") || "",
    avatar: "",
    users: {}
  };
  render() {
    console.log(this.state.avatar);
    const { topics, user, avatar } = this.state;

    return (
      <div className="App">
        <Navigation
          topics={topics}
          user={user}
          logout={this.removeUserInState}
          avatar={avatar}
        />
        <Auth path="/login" user={this.state.user} login={this.setUserInState}>
          <Router id="main">
            <Articles path="/" />
            <Articles path="/topics/:topic" />
            <Article path="/article/:article_id" user={user} />
            <NewArticle path="/post" user={user} topics={topics} />
          </Router>
        </Auth>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
    this.fetchAllUsers();
  };

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  fetchAllUsers = () => {
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };
  setUserInState = username => {
    api
      .getSingleUser(username)
      .then(user => this.setState({ user: username, avatar: user.avatar_url }));
    ls.set("user", username);
  };
  removeUserInState = () => {
    this.setState({ user: "" });
    ls.clear();
  };
}

export default App;

// {username: "jessjelly", avatar_url: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg", name: "Jess Jelly"}
