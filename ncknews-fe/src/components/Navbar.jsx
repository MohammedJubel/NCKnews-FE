import React from "react";
import { Link } from "@reach/router";
import "./CSS/Navbar.css";

function Navbar({ topics }) {
  return (
    <nav className="navbar">
      <ul>
        <Link onClick={() => window.location.reload()} to="/articles">
          <li>
            <b>NC NEWS</b>
          </li>
        </Link>

        <li>
          PICK TOPIC
          <ul className="dropDown">
            {topics.map(topic => {
              return (
                <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                  <li>{topic.slug}</li>
                </Link>
              );
            })}
          </ul>
        </li>
        <Link onClick={() => window.location.reload()} to="/article/post">
          <li>NEW POST</li>
        </Link>
        <Link onClick={() => window.location.reload()} to="/">
          <li className="post">LOGIN</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
