import React, { useEffect, useState } from "react";
import Navbar from "../components/homepage/Navbar";
import SecondFooter from "../components/contact-us/SecondFooter";
import NewsLetter from "../components/contact-us/NewsLetter";
import BecomeHelperBanner from "../components/become-helper/BecomeHelperBanner";

const BecomeHelper = () => {
    const[scrollY, setScrollY] = useState(0);
    const[navVariant, setNavVarint] = useState(1);
    const Scrolling = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll(){
            window.addEventListener("scroll",Scrolling);
        }
        if(scrollY>80){
            setNavVarint(2);
        }
        else{
            setNavVarint(1);
        }

        watchScroll();
        return () => {
            window.removeEventListener("scroll", Scrolling);
        };
    }, [scrollY])
  return (
    <React.Fragment>
      <Navbar variant={navVariant}/>
      <BecomeHelperBanner />
      <NewsLetter />
      <SecondFooter />
    </React.Fragment>
  );
};

export default BecomeHelper;
