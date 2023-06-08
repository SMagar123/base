import React from "react";
import image1 from "../assets/images/users/rasmika.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
export const PhotoRetoucing = ({ photoUrl ,className}) => {
  return (
    <div className="photoRetouching">
      <div className="image">
        <img src={photoUrl} alt="photo" />
        <div className="rollup-info">
          <h4>Photo Retouching</h4>
          <p>Branded Ecommerce</p>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
      </div>
    </div>
  );
};
