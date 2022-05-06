import React from "react";
import Header from "../components/contact-us/Header";
import ContactUsBanner from "../components/contact-us/ContactUsBanner";
import SecondFooter from "../components/contact-us/SecondFooter";
import NewsLetter from "../components/contact-us/NewsLetter";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Header />
      <ContactUsBanner />
      <NewsLetter />
      <SecondFooter />
    </React.Fragment>
  );
};

export default ContactUs;
