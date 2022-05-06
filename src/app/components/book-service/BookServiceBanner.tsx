import React from "react";
import StarImage from "../contact-us/StarImage";
import BookServiceheader from "./BookServiceHeader";

const BookServiceBanner = () => {
  return (
    <React.Fragment>
      <div>
        <div className="book-service-banner"></div>
      </div>
      <StarImage heading="Set up your cleaning service"></StarImage>
      <div className="book-service-div">
        <BookServiceheader />
      </div>
    </React.Fragment>
  );
};

export default BookServiceBanner;
