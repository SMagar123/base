import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { fa42Group } from "@fortawesome/free-brands-svg-icons";
export const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <div className="chooseUs-individual">
        <div className="chooseUs-logo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="chooseUs-details">
          <h3>24/7 Support</h3>
          <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>
      <div className="chooseUs-individual">
        <div className="chooseUs-logo">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="chooseUs-details">
          <h3>Take Ownership</h3>
          <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>
      <div className="chooseUs-individual">
        <div className="chooseUs-logo">
          <FontAwesomeIcon icon={fa42Group} />
        </div>
        <div className="chooseUs-details">
          <h3>Team Work</h3>
          <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};
