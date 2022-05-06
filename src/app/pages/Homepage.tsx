import React, { useEffect, useState } from 'react' 

import Navbar from "../components/homepage/Navbar";
import Banner from '../components/homepage/Banner';
import Footer from '../components/homepage/Footer';
import NewsLetter from '../components/contact-us/NewsLetter';


function Homepage() {

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
            <Banner />
            <NewsLetter />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage