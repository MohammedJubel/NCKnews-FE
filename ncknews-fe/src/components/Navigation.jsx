import React from "react";
import { Link } from "@reach/router";
import "./CSS/nav.css";
import { FiUser } from "react-icons/fi";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { topics, user, logout } = this.props;

    return (
      <div id="pageHeader">
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand id="brand">
            <Link to="/">
              {/* <img
                id="logo"
                src="https://cdn.worldvectorlogo.com/logos/slack-1.svg"
                alt="NC NEWS"
              /> */}
              <h5>NC NEWS</h5>
            </Link>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/post">New Post</Link>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Topics
                </DropdownToggle>
                <DropdownMenu right>
                  {topics.map(topic => {
                    return (
                      <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                        <DropdownItem>{topic.slug}</DropdownItem>
                      </Link>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>

              {user && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {`Welcome ${user}  `}
                    <FiUser />
                  </DropdownToggle>

                  <DropdownMenu right>
                    <DropdownItem onClick={logout}>LogOut</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
