import { Grid } from "@mui/material";
import React from "react";
import { group18_5, Group183, Group184, Group18_1, Shape2 } from "../../assets";
import { Blog_left_bg, Blog_right_bg } from "../../assets";
import RegistrationForm from "./RegistrationForm";

const BecomeHelperBanner = () => {
  return (
    <React.Fragment>
      <div className="become-helper-banner">
        <RegistrationForm />
        <div className="downArrow">
          <a href="#">
            <img src={group18_5} alt="down-arrow" />
          </a>
        </div>
      </div>
      <div className="how-it-works">
        <img src={Blog_left_bg} alt="logo" className="bg3" />
        <h1>How it work</h1>
        <Grid container>
          <Grid className="work-grid">
            <Grid item lg={6} md={6} sm={12}>
              <h2>Register Yourself</h2>
              <p>
                Provide your basic information to register yourself as a service
                provider..
              </p>
              <div className="read-more-btn">
                <h3>Read More</h3>
                <img src={Shape2} alt="read-more-arrow" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <img src={Group18_1} alt="Group18_1" className="round-image-right"/>
            </Grid>
          </Grid>

          <Grid className="work-grid">
            <Grid item lg={6} md={6} sm={12}>
              <img src={Group184} alt="Group18_1" className="round-image-left"/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <h2>Get service requests</h2>
              <p>
              You will get service request from customers depends on service area and profile.
              </p>
              <div className="read-more-btn">
                <h3>Read More</h3>
                <img src={Shape2} alt="read-more-arrow" />
              </div>
            </Grid>
          </Grid>
          <Grid className="work-grid">
            <Grid item lg={6} md={6} sm={12}>
              <h2>Compelete Service</h2>
              <p>
              Accept service request from your customers and complete your work.
              </p>
              <div className="read-more-btn">
                <h3>Read More</h3>
                <img src={Shape2} alt="read-more-arrow" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <img src={Group183} alt="Group18_1" className="round-image-right"/>
            </Grid>
          </Grid>
        </Grid>
        <img src={Blog_right_bg} alt="logo" className="bg4" />
      </div>
    </React.Fragment>
  );
};

export default BecomeHelperBanner;
