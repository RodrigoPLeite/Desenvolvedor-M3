import React from 'react'
import logoM3 from '../../img/logo-m3.png';
import Box from "@mui/material/Box";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useCarrinho } from '../../hooks/useCarrinho';

import { Container } from './styles';

const Navbar = () => {
  const { carrinho } = useCarrinho();

    const handleClick = () => {
      <Link to="/carrinho" />
    }

    return (
        <>
        <Container>
        <Box sx={{
            display: 'flex',
            borderBottom: "3px solid lightgray",
        }}>
            <Box sx={{
                backgroundImage: `url(${logoM3})`,
                backgroundRepeat: 'no-repeat',
                width: "70%",
                height: "60px",
                marginLeft: "5%",
                backgroundPosition: "left",
                marginBottom: "1%",
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
                    >{carrinho.length}
                    </Button>
                </Link>
            </Box>
        </Box>
        </Container>
        </>
    );
}

export default Navbar;