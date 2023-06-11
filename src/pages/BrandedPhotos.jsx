import React from "react";
import { PhotoRetoucing } from "../components";
import plant from "../assets/images/branded/project-01.png";
import bottle from "../assets/images/branded/project-02.png";
import laptop from "../assets/images/branded/project-03.png";
import mobile from "../assets/images/branded/project-04.png";
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
            <PhotoRetoucing photoUrl={plant} />
            <PhotoRetoucing photoUrl={bottle} />
          </div>
          <div className="left-bottom">
            <PhotoRetoucing photoUrl={laptop} />
          </div>
        </div>
        <div className="right-images">
          <div className="right-image">
            <PhotoRetoucing photoUrl={mobile} />
          </div>
        </div>
      </div>
    </div>
  );
};
