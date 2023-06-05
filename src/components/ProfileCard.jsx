import React from "react";
import user1 from "../assets/images/users/user1.jpg";
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
            <img src={user1} alt="user1" />
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
          <span>SDKHFLKASDHFKLA</span>
          <br />
          <span className="post">sksjfdk</span>
        </div>
      </div>
    </div>
  );
};
