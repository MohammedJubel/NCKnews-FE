import React from "react";
import { Media, Badge } from "reactstrap";
import "./CSS/media.css";
import faker from "faker";
import { Link } from "@reach/router";
import { FiMessageSquare, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const MediaCard = props => {
  return (
    <div id="articlesPage">
      {props.articles.map(article => (
        <Media className="articleborder">
          <Media left middle>
            {article.topic === "cooking" && (
              <Media
                object
                className="my_image"
                src={"https://static.thenounproject.com/png/1088303-200.png"}
              />
            )}
            {article.topic === "football" && (
              <Media
                object
                className="my_image"
                src={
                  "https://st2.depositphotos.com/1006689/10129/v/950/depositphotos_101292814-stock-illustration-soccer-football-vector-icon.jpg"
                }
              />
            )}
            {article.topic === "coding" && (
              <Media
                object
                className="my_image"
                src={"http://clipart-library.com/images/8TA6aX6ec.jpg"}
              />
            )}
          </Media>
          <Media body>
            <Link
              to={`/article/${article.article_id}`}
              key={article.article_id}
            >
              <Media heading>
                <b>{article.title}</b>
              </Media>
            </Link>
            <h5>
              <Badge color="info">{article.topic}</Badge>
            </h5>
            {article.author} - {article.created_at.substring(0, 10)}
            <br />
            {/* <FiHeart id="heartIcon" /> */}
            <FaHeart id="heartIcon" />
            {article.votes}
            &emsp;
            <FiMessageSquare />
            {article.comment_count}
          </Media>
        </Media>
      ))}
    </div>
  );
};

export default MediaCard;
