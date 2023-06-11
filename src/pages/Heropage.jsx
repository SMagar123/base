import { Navbar } from "../layouts/Navbar";
import homepageImage from "../assets/images/homepageImage.png";
import { Button } from "../components";
import { ChooseUs } from "./ChooseUs";
import { ChooseUsDetailing } from "./ChooseUsDetailing";
import { Members } from "./Members";
import { Services } from "./Services";
import { PremiumListing } from "./PremiumListing";
import { BrandedPhotos } from "./BrandedPhotos";
import { ClinetTestimonal } from "./ClinetTestimonal";
import { Blogs } from "./Blogs";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Heropage = () => {
  const [togglePage, setTogglePage] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  const handleScrollPagination = () => {
    const element = document.getElementById(`${togglePage}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    handleScrollPagination();
  }, [togglePage]);
  return (
    <>
      <Navbar setTogglePage={setTogglePage} />
      <div id="Home">
        <div className="heropage">
          <div className="backDrop"></div>
          <div className="heropage_desc">
            <div className="details">
              <div className="slogan">
                <h2>
                  We specialize in UI/UX, Web Development, Digital Marketing.
                </h2>
              </div>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque fringilla magna mauris. Nulla fermentum viverra sem eu
                  rhoncus consequat varius nisi quis, posuere magna.
                </p>
              </div>
              <div className="contact">
                <Button label="Get Started Now" className="contact" />
                <div className="call">
                  <p>Call us (0123) 456 – 789</p>
                  <p>For any question or concern</p>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={homepageImage} alt="homepage" />
            </div>
          </div>
        </div>
        <ChooseUs />
        <ChooseUsDetailing />
      </div>
      <div id="Members">
        <Members />
      </div>
      <div id="Services">
        <Services />
        <PremiumListing />
      </div>
      <div id="Testimonal">
        <BrandedPhotos />
        <ClinetTestimonal />
      </div>
      <div id="Blogs">
        <Blogs />
      </div>
    </>
  );
};
