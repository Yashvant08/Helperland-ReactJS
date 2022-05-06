import React from 'react'
import { LargeLogo } from '../../assets'
import {styled, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import Login from '../homepage/Login'


const CustomButton = styled(Button)({
    color:"#ffffff",
    textTransform:"capitalize",
    fontSize:"16px",
    margin:"0 6px",
    backgroundColor:"#296268",
    border:"1px solid #ffffff",
    borderRadius:"20px",
    lineHeight:"20px",
    padding:"7px 20px 8px 20px",    
    '@media(max-width:1024px)':{
        padding:"6px 10px "
    },
    '@media(max-width:786px)':{
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

const Header = () => {
  return (
    <React.Fragment>
        <nav className='nav-header'>
            <img src={LargeLogo} alt="logo" className='logo-header'/>
            <ul className='navlinks-header'>
                <CustomButton><Link to='/book-service'>Book now</Link></CustomButton>
                <li><Link to='/price'>Prices &amp; services</Link></li>
                <li><Link to='/'>Warranty</Link></li>
                <li><Link to='/about-us'>Blog</Link></li>
                <li><Link to='/contact-us'>Contact</Link></li>
                <Login />
                <CustomButton><Link to='/become-helper'>Become a Helper</Link></CustomButton>
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default Header