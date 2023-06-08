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
export const Heropage = () => {
  return (
    <>
      <div className="heropage">
        <div className="backDrop"></div>
        <Navbar />
        <div className="heropage_desc">
          <div className="details">
            <div className="slogan">
              <h2>
                We specialize in UI/UX, Web Development, Digital Marketing.
              </h2>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
                consequat varius nisi quis, posuere magna.
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
      <Members />
      <Services />
      <PremiumListing />
      <BrandedPhotos />
      <ClinetTestimonal />
      <Blogs />
    </>
  );
};
