import React from "react";
import { BlogCards } from "../components";
import blog1 from "../assets/images/blogs/blog-01.png";
export const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-slogan">
        <h2>Latest Blogs & News</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>
      <div className="blogs-cards">
        <BlogCards
          img={blog1}
          author="Hasan Ali"
          date="2023-06-08"
          title="Free advertising for your online business"
        />
        <BlogCards
          img={blog1}
          author="Rafhe James"
          date="2023-06-08"
          title="9 simple ways to improve your design skills"
        />
        <BlogCards
          img={blog1}
          author="Hasan Ali"
          date="2023-06-08"
          title="Tips to quickly improve your coding speed."
        />
      </div>
    </div>
  );
};
