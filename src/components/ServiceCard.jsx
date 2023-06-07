import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
export const ServiceCard = ({ serviceIcon, serviceName, serviceDetails }) => {
  return (
    <div className="servicecard">
      <div className="icons">
        <FontAwesomeIcon icon={serviceIcon} />
      </div>
      <div className="name">
        <p>{serviceName}</p>
      </div>
      <div className="details">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quis voluptas distinctio id aliquam, quisquam et in impedit ipsam?
          Tempora, rem consectetur. Repellendus sequi totam, in voluptatum
          tempora recusandae eaque?
        </span>
      </div>
    </div>
  );
};
