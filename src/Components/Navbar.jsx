import React from 'react'
import logoM3 from '../img/logo-m3.png';
import Box from "@mui/material/Box";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Carrinho from './Carrinho';

const Navbar = () => {
    const handleClick = () => {
        <Carrinho />
    }

    return (
        <>
        <Box sx={{
            display: 'flex',
        }}>
            <Box sx={{
                backgroundImage: `url(${logoM3})`,
                backgroundRepeat: 'no-repeat',
                width: "70%",
                height: "60px",
                marginLeft: "5%",
                backgroundPosition: "left",
            }}>
            </Box>
            <Box sx={{
                backgroundPosition: "center",
                width: "30%",
                paddingTop: "10px",
                paddingLeft: "20%",
            }}>
                <Link to="/carrinho" >
                    <Button
                        size="large"
                        startIcon={<ShoppingBagIcon />}
                        onClick={() => handleClick() }
                    >
                    </Button>
                </Link>
            </Box>
            </Box>
        
        </>
    );
}

export default Navbar;