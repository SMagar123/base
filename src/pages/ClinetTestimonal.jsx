import React from "react";
import client1 from "../assets/images/users/user1.jpg";
import { ClientTestimonalCard } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
export const ClinetTestimonal = () => {
  return (
    <div className="clientTestimonal">
      <div className="clientTestimonal-slogan">
        <h2>Client’s Testimonials</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>
      <div className="clientTestimonal-cards">
        <ClientTestimonalCard
          photoUrl={client1}
          clientName="David Smith"
          clientDesignation="Founder @lighthouse"
          clientCompany="LightHouse"
        />
      </div>
      <div className="cardShuffleArrows">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </div>
    </div>
  );
};
