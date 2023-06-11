import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSun } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../components/index";
const navbarItems = ["Home", "Members", "Services", "Testimonal", "Blogs"];
export const Navbar = ({ setTogglePage }) => {
  const [pages, setPages] = useState("landing");
  const setTogglingPages = (e) => {
    e.preventDefault();
    setPages(e.target.innerText);
  };
  useEffect(() => {
    setTogglePage(pages);
  }, [pages]);
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <FontAwesomeIcon icon={faBookmark} />
          <h2>Base</h2>
        </div>
        <div className="navlist">
          {navbarItems.map((item, index) => {
            return (
              <li
                key={index}
                name={`${item}`}
                onClick={(e) => setTogglingPages(e)}
              >
                {item}
              </li>
            );
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
