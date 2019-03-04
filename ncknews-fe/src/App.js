import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import * as api from "./api";
import Navbar from "./components/Navbar";

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
        <Articles />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    api.getTopics().then(topics => {
      console.log(topics, "check");
      this.setState({ topics });
    });
  };
}

export default App;
