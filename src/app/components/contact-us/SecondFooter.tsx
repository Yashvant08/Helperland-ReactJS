import React from 'react'
import { Link } from 'react-router-dom'
import { FBIcon, InstaIcon, LargeLogo } from "../../assets/index";

const SecondFooter = () => {
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
        <div className="second-footer-2">
            <hr className='second-footer-hr'></hr>
          <p>
          ©2018Helperland. All rights reserved.<i style={{marginLeft:"15px"}}/>Terms and Conditions  |  Privacy Policy
          </p>

        </div>
      </div>
    </React.Fragment>
  )
}

export default SecondFooter