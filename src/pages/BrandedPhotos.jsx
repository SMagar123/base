import React from "react";
import { PhotoRetoucing } from "../components";
import smriti from "../assets/images/users/smriti.jpg";
import rasmika from "../assets/images/users/rasmika.jpg";
export const BrandedPhotos = () => {
  return (
    <div className="brandedPhotos">
      <div className="brandedPhotos-slogan">
        <h2>We Offer Great Affordable Premium Prices.</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>
      <div className="brandedPhotos-images">
        <div className="left-images">
          <div className="left-top">
            <PhotoRetoucing photoUrl={rasmika} />
            <PhotoRetoucing />
          </div>
          <div className="left-bottom">
            <PhotoRetoucing />
          </div>
        </div>
        <div className="right-images">
          <PhotoRetoucing photoUrl={smriti} />
        </div>
      </div>
    </div>
  );
};
