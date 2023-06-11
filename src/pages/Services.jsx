import React, { useEffect } from "react";
import { ServiceCard } from "../components";
import {
  faSkype,
  fa500px,
  faStackExchange,
  faCloudflare,
  faAirbnb,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
export const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-cubic",
      delay: 100,
    });
  }, []);
  return (
    <div className="services" data-aos="fade-up">
      <div className="services-slogan">
        <h2>We Offer The Best Quality Service for You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>
      <div className="services-card" data-aos="fade-down">
        <ServiceCard serviceIcon={faSkype} serviceName="Skype" />
        <ServiceCard serviceIcon={faAddressBook} serviceName="Address Book" />
        <ServiceCard serviceIcon={fa500px} serviceName="Speed" />
        <ServiceCard
          serviceIcon={faStackExchange}
          serviceName="Stack Exchange"
        />
        <ServiceCard serviceIcon={faCloudflare} serviceName="Cloud Flare" />
        <ServiceCard serviceIcon={faAirbnb} serviceName="Airbnb" />
      </div>
    </div>
  );
};
