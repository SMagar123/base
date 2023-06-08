import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
export const ClientTestimonalCard = ({
  photoUrl,
  clientName,
  clientDesignation,
  clientCompany,
}) => {
  return (
    <div className="clientTestimonalCard">
      <div className="client-photo">
        <img src={photoUrl} alt="client" />
      </div>
      <div className="client-details">
        <div className="client-message">
          <FontAwesomeIcon icon={faComments} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            sequi architecto pariatur impedit neque eaque ad? Aliquam beatae
            deleniti omnis maiores necessitatibus delectus in repellat, sapiente
            dicta quidem nostrum modi.
          </p>
        </div>
        <div className="client-info">
          <div className="client-name">
            <h5>{clientName}</h5>
            <p>{clientDesignation}</p>
          </div>
          <div className="client-company">
            <h5>{clientCompany}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
