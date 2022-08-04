import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../Common/Chip";
import "./style.css";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="Cober" className="blogItem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-description">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link to={"/blog/${id}"} className="blogItem-link">
          →
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
