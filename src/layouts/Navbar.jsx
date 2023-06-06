import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSun } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../components/index";
const navbarItems = ["Home", "Features", "Pages", "Support"];
export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <FontAwesomeIcon icon={faBookmark} />
          <h2>Base</h2>
        </div>
        <div className="navlist">
          {navbarItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
        <div className="authenticate">
          <FontAwesomeIcon icon={faSun} />
          <Button label="Sign In" className="signin" />
          <Button label="Sign Up" className="signup" />
        </div>
      </nav>
    </div>
  );
};
