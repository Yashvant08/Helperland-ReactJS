import { Grid } from "@mui/material";
import React from "react";
import StarImage from "./StarImage";
import { Form1_2, Phone, Email } from "../../assets/index";
import Form from "./Form";

const ContactUsBanner: React.FC = () => {
  return (
    <React.Fragment>
      <div className="contact-us-banner"></div>
      <StarImage heading="Contact Us"></StarImage>
      <div className="contact-grid-container">
        <Grid container>
          <Grid item lg={4} md={4} sm={12} xs={12} className="contact-icon">
            <img src={Form1_2} alt="location" />
            <p>Konigswinterer Str. 116,</p>
            <p>53227 Bonn</p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="contact-icon">
            <img src={Phone} alt="Phone" />
            <p>
              <a href="tel:+4940987560000">+49 (40) 987 56 0000</a>
            </p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="contact-icon">
            <img src={Email} alt="Email" />
            <p>
              <a href="mailto: [info@helperland.com]">info@helperland.com</a>
            </p>
          </Grid>
        </Grid>
      </div>
      <hr
        style={{
          maxWidth: "1140px",
          color: "#D6D0D0",
          backgroundColor: "#D6D0D0",
        }}
      ></hr>
      <div className="form-heading">
        <h1>Get In Touch With Us</h1>
      </div>
      <Form />
      <div className="map">
        <iframe
          title="address"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tatvsoft%20ahmedabad+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
        >
          <a href="https://www.gps.ie/truck-gps/" />
        </iframe>
      </div>
    </React.Fragment>
  );
};

export default ContactUsBanner;
