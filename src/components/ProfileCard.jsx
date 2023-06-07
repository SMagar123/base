import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const ProfileCard = ({ proImg, username, post }) => {
  return (
    <div className="profilecard">
      <div className="proCard">
        <div className="proDetails">
          <div className="proimage">
            <img src={proImg} alt="user1" />
          </div>
          <div className="proSocialmedia">
            <div className="front-div"></div>
            <div className="back-div">
              <div className="icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
        <div className="proDesignation">
          <span>{username}</span>
          <br />
          <span className="post">{post}</span>
        </div>
      </div>
    </div>
  );
};
