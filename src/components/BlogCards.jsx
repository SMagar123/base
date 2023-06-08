import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { Button } from "./Button";
export const BlogCards = ({ img, author, date, title }) => {
  return (
    <div className="blogCard">
      <div className="blogCard-image">
        <img src={img} alt="blogcard" />
        <div className="blogCard-readmore">
          <Button label="Read more" className="readmore" />
        </div>
      </div>
      <div className="blogCard-dates">
        <FontAwesomeIcon icon={faUser} />
        <span>{author}</span>
        <FontAwesomeIcon icon={faCalendar} />
        <span>{date}</span>
      </div>
      <div className="blogCard-topic">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
