import React from "react";
import left1image from "../assets/images/chooseus/left1.png";
import left2image from "../assets/images/chooseus/left2.png";
import rightImage from "../assets/images/chooseus/right.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
export const ChooseUsDetailing = () => {
  return (
    <div className="chooseusDetail">
      <div className="chooseusDetail-image">
        <div className="left-part">
          <img src={left1image} alt="left1" />
          <img src={left2image} alt="left2" />
        </div>
        <div className="right-part">
          <div className="half1">
            <div className="halfcircle"></div>
          </div>
          <img src={rightImage} alt="rightimage" />
          <div className="half2">
            <div className="halfcircle2"></div>
          </div>
        </div>
      </div>
      <div className="chooseusDetail-text">
        <p>Why Choose Us</p>
        <h2>We Make Our customers happy by giving Best services.</h2>
        <p className="secondpara">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
        <div className="playbutton">
          <div className="playripple">
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
          <span>SEE HOW WE WORK</span>
        </div>
      </div>
    </div>
  );
};
