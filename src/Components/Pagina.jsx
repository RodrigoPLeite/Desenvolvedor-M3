import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import Carrinho from './Carrinho';
import styled from "styled-components";

const Container = styled.div`
    width: 32%;
    display: flex;
    flex-Direction: column;
    margin-left: 1%;
    @media (max-width: 1168px){
        width: 30%;
        margin-left: 0%;
    }
    @media (max-width: 962px){
        width: 50%;
        margin-left: 10%;
    }
`
const BotaoComprar = styled.button`
width: 100%;
height: 30px;
background-color: black;
color: white;
textAlign: center;
size=large;
variant=contained;
    @media (max-width: 800px){
        width: 90%;
        background-color: black;
        color: white;
        textAlign: center;
        size=large;
        variant=contained;
        margin-left: 6%;
}

`

const Pagina = ({ produtosFiltrados }) => {

    return (
        <>
        
        <Box sx={{ width: "80%", display: "flex", flexWrap: "wrap", marginLeft: "20%"}}>
            {
                produtosFiltrados.map((produto, i) => (
                    <Container>
                    <Card key={i} className="boxPagina" sx={{ width: 300, marginLeft: "5%" }}>
                        <CardMedia
                            image={produto.image}
                            component="img"
                            height="450"
                            alt={produto.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" textAlign="center" >
                                {produto.name}  {produto.color}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" textAlign="center">
                                <b>{produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>
                            </Typography>
                            <Typography gutterBottom variant="h8" component="div" textAlign="center" marginTop="10px">
                                até {produto.parcelamento[0]}x de {produto.parcelamento[1].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </Typography>
                            <BotaoComprar sx={{ width: "100%", backgroundColor: "black", textAlign: "center" }} size="large" variant="contained" onClick={() => <Carrinho id={produto.id} />}>
                                COMPRAR
                            </BotaoComprar>
                        </CardContent>
                    </Card>
                    </Container>
                ))
            }
        </Box>
        <Button sx={{ width: "20%", marginLeft: "40%", marginTop: "7%" }} size="large" variant="contained" type="submit">
            CARREGAR MAIS
        </Button>
           
        </>
    );
}

export default Pagina;