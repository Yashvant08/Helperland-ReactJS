import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, styled } from "@mui/material";
import { IcCheck, Step1, Step2, Step3, Step4, StepArrow1 } from "../../assets";
import {
  StepArrow1Copy,
  group18_5,
  Helper_img_1,
  Group_23,
  Group_24,
} from "../../assets";
import { Blog_left_bg, Blog_right_bg,Group36 } from "../../assets/index";

const BookCleanerButton = styled(Button)({
  width: "225px",
  height: "54px",
  margin: "18px 7px 157px 0",
  borderRadius: "27px",
  border: "1px solid #ffffff",
  background: "#006072",
  textTransform: "none",
  a: {
    color: "white",
    fontSize: "18px",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#1D7A8C",
    cursor: "pointer",
    a: {
      color: "#1D7A8C",
    },
  },
});

const Banner = () => {
  return (
    <React.Fragment>
      <div className="Banner">
        <h1>Do not feel like housework?</h1>
        <ul>
          <li>
            <img src={IcCheck} alt="check icon" />
            <p>Certified &amp; insured helper</p>
          </li>
          <li>
            <img src={IcCheck} alt="check icon" />
            <p>Easy booking procedure</p>
          </li>
          <li>
            <img src={IcCheck} alt="check icon" />
            <p>Friendly customer service</p>
          </li>
          <li>
            <img src={IcCheck} alt="check icon" />
            <p>Secure online payment method</p>
          </li>
        </ul>
        <div className="book-helper-button">
          <BookCleanerButton>
            <Link to="/book-service">Book a helper!</Link>
          </BookCleanerButton>
        </div>
        <div className="book-service-step">
          <Grid container className="parent-grid">
            <Grid item lg={2} md={2} xs={12}>
              <div className="step-img">
                <img src={Step1} alt="step 1" />
                <p>Enter postal code</p>
              </div>
            </Grid>
            <div className="step-arrow">
              <img src={StepArrow1} alt="StepArrow1" />
            </div>
            <Grid item lg={2} md={2} xs={12}>
              <div className="step-img">
                <img src={Step2} alt="step 2" />
                <p>Select desired date</p>
              </div>
            </Grid>
            <div className="step-arrow">
              <img src={StepArrow1Copy} alt="StepArrow1" />
            </div>
            <Grid item lg={2} md={2} xs={12}>
              <div className="step-img">
                <img src={Step3} alt="step 3" />
                <p>Secure online payment</p>
              </div>
            </Grid>
            <div className="step-arrow">
              <img src={StepArrow1} alt="StepArrow1" />
            </div>
            <Grid item lg={2} md={2} xs={12}>
              <div className="step-img">
                <img src={Step4} alt="step 4" />
                <p>Feel at home</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="downArrow">
          <a href="#">
            <img src={group18_5} alt="down-arrow" />
          </a>
        </div>
      </div>
      <h1 className="convince-yourself">Convince yourself</h1>
      <div className="service-main">
        <Grid container>
          <Grid item lg={4} md={12} sm={12} style={{ margin: "0 auto" }}>
            <div className="service-element">
              <img src={Helper_img_1} alt="service" />
              <h1>Friendly &amp; Certified Helpers</h1>
              <p>
                we want you to be completely satisfied with our service and feel
                comfortable at home. In oredre to guaratee this, our helpers go
                through a test procedure. Only when the cleaners meet our high
                standards,they may call themselves Helper.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} style={{ margin: "0 auto" }}>
            <div className="service-element">
              <img src={Group_23} alt="service" />
              <h1>Transperent and secure payment</h1>
              <p>
                We have transparent prices, you do not have to scratch money or
                money on the sideboard Leave it: Pay your helper easily and
                secirely via the online payment method. You will also receive an
                invoice for each completed cleaning.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} style={{ margin: "0 auto" }}>
            <div className="service-element">
              <img src={Group_24} alt="service" />
              <h1>We're here for you</h1>
              <p className="extra">
                You have a question or need assistance with the booking process?
                Our customer service is happy to help and advise you. How you
                can reach us you will find out when you look under "Contact". we
                look forward to hearing from you or reading.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="blog">
        <img className="left-bg" src={Blog_left_bg} alt="logo" />
        <div className="div1">
          <div className="div2">
            <h1>We do not know what makes you happy, but ...</h1>
            <p>
              If it's not dusting off, our friendly helpers will free you from
              this burden - do not worry anymore about spending valuable time
              doing housework, but savor life, you're well worth your time with
              beautiful experiences. Free yourself and enjoy the gained time: Go
              celebrate, relax, play with your children, meet friends or dare to
              jump on the bungee .Other leisure ideas and exclusive events can
              be found in our blog - guaranteed free from dust and cleaning
              tips!
            </p>
          </div>
          <img src={Group36} alt="group36" />
        </div>
        <img className="right-bg" src={Blog_right_bg} alt="logo" />
      </div>
    </React.Fragment>
  );
};

export default Banner;
