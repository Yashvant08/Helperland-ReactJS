import React, { useState } from 'react';

import {MenuItem, Menu, Button} from '@mui/material';

import {SpArrowDown, IcFlag} from '../../assets/index';


type BasicMenuProps = {
    name: string,
    secname:string,
}



const BasicMenu: React.FC<BasicMenuProps> = (props) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);


    const NewIcon = () => {
        return(
            <>
                <img src={IcFlag} alt="icon"/>
                <img src={SpArrowDown} style={{marginLeft:"5px"}} alt="downArrow"/>
            </>
        )
    }

    const showMenu = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Button
                style={{border:"none", borderRadius:"0", backgroundColor:"transperent"}}
                id="menu-button"
                aria-controls={open ? 'country-menu' : undefined}
                area-haspopup="true"
                area-expanded={open ? 'true' : undefined}
                onClick={showMenu}
            >
                <NewIcon />
            </Button>
            <Menu 
                id='country-menu' 
                open={open}
                anchorEl={anchorEl}
                MenuListProps={{
                    'aria-labelledby': 'menu-button'
                }}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal: 'right',
                }}
                onClose={closeMenu} 

            >
                <MenuItem onClick={closeMenu}>{props.name}</MenuItem>
                <MenuItem onClick={closeMenu}>{props.secname}</MenuItem>
            </Menu>
        </>
    )
}

export default BasicMenu;