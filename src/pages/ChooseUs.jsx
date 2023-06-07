import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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
    </div>
  );
};
