import React from "react";
import { Badge } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heading <Badge color="secondary">New</Badge>
        </h1>
      </div>
    );
  }
}
