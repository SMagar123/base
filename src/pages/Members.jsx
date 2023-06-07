import React from "react";
import { ProfileCard } from "../components";
import rasmika from "../assets/images/users/rasmika.jpg";
import user1 from "../assets/images/users/user1.jpg";
import kapil from "../assets/images/users/kapil.jpg";
export const Members = () => {
  return (
    <div className="members">
      <div className="circle">
        <div className="circle-content"></div>
      </div>
      <div className="triangle"></div>
      <div className="members-slogan">
        <h2>Meet With Our Creative Dedicated Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>
      <div className="members-images">
        <ProfileCard
          proImg={rasmika}
          username="Rasmika Mandhana"
          post="UI/UX Designer"
        />
        <ProfileCard
          proImg={user1}
          username="Gorgeous Goegina"
          post="Frontend Developer"
        />
        <ProfileCard
          proImg={kapil}
          username="Kapil Chhatkuli"
          post="Backend Developer"
        />
      </div>
    </div>
  );
};
