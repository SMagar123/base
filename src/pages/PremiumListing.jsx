import React from "react";
import { PremiumCard } from "../components";
export const PremiumListing = () => {
  return (
    <div className="premiumlisting">
      <div className="halfcircle"></div>
      <div className="halfcircle2"></div>
      <div className="premiumlisting-slogan">
        <h2>We Offer Great Affordable Premium Prices.</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>
      <div className="premiumlisting-cards">
        <PremiumCard preName="Starter" price="23" className="grow-business" />
        <PremiumCard preName="Growth Plan" price="58" />
        <PremiumCard preName="Business" price="100" className="grow-business" />
      </div>
    </div>
  );
};
