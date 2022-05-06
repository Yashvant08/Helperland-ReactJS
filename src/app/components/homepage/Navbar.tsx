import React from 'react';
import {LargeLogo} from "../../assets/index";
import {Link} from 'react-router-dom';
import {Button, styled} from '@mui/material';
import BasicMenu from './BasicMenu';
import Login from './Login';


type navbarProps = {
    variant:number;
}

const CustomButton = styled(Button)({
    color:"#ffffff",
    textTransform:"capitalize",
    fontSize:"16px",
    margin:"0 6px",
    backgroundColor:"transparent",
    border:"1px solid #ffffff",
    borderRadius:"20px",
    lineHeight:"24px",
    padding:"6px 20px 7px 20px",    
    '@media(max-width:1024px)':{
        padding:"6px 10px "
    },
    '@media(max-width:768px)':{
        color:"white"
    },
    'a':{
        color:"white",
    },
    '&:hover': {
        backgroundColor:"#F4F5F8",
        color:"#1D7A8C",
        cursor: "pointer",
        'a':{
            color:"#1D7A8C",
        }
    },
})


const Navbar: React.FC<navbarProps> = (props) => {

    
    return (
        <React.Fragment>
        <nav className={props.variant ===2 ? "navbarScrolled" : "navbar"}>
            <div className={props.variant ===2 ? "logo2" : "logo"}>
                <img src={LargeLogo } alt="logo" />

            </div>
            <ul>
                <CustomButton><Link to='/book-service'>Book a cleaner</Link></CustomButton>
                <li><Link to='/price'>Prices</Link></li>
                <li><Link to='#'>Our Guarantee</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
                <Login />
                <CustomButton><Link to="/become-helper">Become a Helper</Link></CustomButton>
                <li ><BasicMenu  name={"English"} secname={"German"} ></BasicMenu></li>
            </ul>
        </nav>
        </React.Fragment>
    )
}

export default Navbar;
