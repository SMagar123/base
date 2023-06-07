import React from "react";
import { Button } from "./Button";
export const PremiumCard = ({ preName, price, className }) => {
  return (
    <div className="premiumcard">
      <div className="plantype">
        <h3>{preName}</h3>
      </div>
      <div className="pricing">
        <span>${price}</span>
        <span>/month</span>
        <p>No credit card required</p>
      </div>
      <div className="accessplan">
        <Button label="Try for Free" className={className} />
      </div>
      <div className="storagedetails">
        <p>400 GB Storaget</p>
        <p>Unlimited Photos & Videos</p>
        <p>Exclusive Support</p>
      </div>
      <div className="trail">
        <p>7-day free trail</p>
      </div>
    </div>
  );
};
