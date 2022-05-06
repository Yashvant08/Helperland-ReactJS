import React from "react";
import { LargeLogo } from "../../assets/index";
import { Link } from "react-router-dom";
import { FBIcon, InstaIcon } from "../../assets/index";
import { Button} from "@mui/material";

const Footer = () => {
  return (
    <React.Fragment>
      <div>
        <div className="first_footer">
          <img src={LargeLogo} alt="Helperland logo" className="footer_logo" />
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT</Link>
            </li>
            <li>
              <Link to="">TESTIMONIALS</Link>
            </li>
            <li>
              <Link to="/faqs">FAQS</Link>
            </li>
            <li>
              <Link to="">INSURANCE POLICY</Link>
            </li>
            <li>
              <Link to="">IMPRESSUM</Link>
            </li>
          </ul>
          <div className="social_media_icon">
            <div className="fb_icon">
              <img src={FBIcon} alt="facebook-icon" />
            </div>
            <div>
              <img src={InstaIcon} alt="instagram-icon" />
            </div>
          </div>
        </div>
        <div className="second_footer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            nunc libero, ac malesuada ligula aliquam ac.{" "}
            <a href="#" style={{ color: "#6EABEF" }}>
              Privacy Policy
            </a>
          </p>
          <div className="ok_button">
            <Button>OK!</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
