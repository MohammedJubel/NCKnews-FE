import React from "react";
import { Link } from "@reach/router";
import "./CSS/Navbar.css";

function Navbar({ topics }) {
  return (
    <nav className="navbar">
      {topics.map(topic => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            <li>{topic.slug}</li>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
