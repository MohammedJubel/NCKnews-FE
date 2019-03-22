import React from "react";
import { Link } from "@reach/router";
import "./CSS/Navbar.css";

function Navbar({ topics, user, logout }) {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li>NC NEWS</li>
        </Link>

        <li>
          {" "}
          TOPIC
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

        <Link to="/post">
          <li>NEW POST</li>
        </Link>

        {user.username && (
          <div>
            <li>{`Welcome ${user.username}`}</li>

            <li onClick={logout}>
              <label>LogOut</label>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
