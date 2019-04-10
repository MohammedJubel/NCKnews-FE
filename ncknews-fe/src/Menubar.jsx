import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Menubar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
          <NavLink href="#">Another Link</NavLink>{" "}
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    );
  }
}
