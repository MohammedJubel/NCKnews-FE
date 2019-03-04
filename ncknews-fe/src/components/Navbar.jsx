import React from "react";

function Navbar({ topics }) {
  console.log(topics, "dfgfg");
  return (
    <div>
      {topics.map(topic => {
        return <nav key={topic.slug}>{topic.slug}</nav>;
      })}
    </div>
  );
}

export default Navbar;

// {
//   topics.map(topic => {
//     <div>{topic.slug}</div>;
//   }}
