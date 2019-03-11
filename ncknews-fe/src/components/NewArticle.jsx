import React, { Component } from "react";

export default class NewArticle extends Component {
  render() {
    return (
      <div>
        <form>
          Post Article
          <input onChange={this.handleChange} type="textArea" />
        </form>
      </div>
    );
  }
}
