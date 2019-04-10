import React from "react";
import { Spinner } from "reactstrap";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <Spinner
          style={{ width: "20rem", height: "20rem" }}
          color="secondary"
        />
      </div>
    );
  }
}
