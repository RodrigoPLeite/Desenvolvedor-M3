import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useCarrinho } from '../../hooks/useCarrinho';
import { Container, BotaoComprar } from './styles';

const Pagina = ({ produtosFiltrados }) => {
    const { adicionarItem } = useCarrinho();
    const [existeMaisProdutos, setExisteMaisProdutos] = useState(true);
    const [produtos, setProdutos] = useState([]);
    const [tamanho, setTamanho] = useState(3);

    useEffect(() => {     
        if (produtosFiltrados.length > 3) {
            const novosProdutos = produtosFiltrados.slice(0, tamanho);         
            setProdutos(novosProdutos);
            setExisteMaisProdutos(true);
        } else {
            setProdutos(produtosFiltrados);
            setExisteMaisProdutos(false);
        }
    }, [produtosFiltrados]);

    const handleClick = () => {
        let proximaQuantidade = tamanho + 3;

        if (proximaQuantidade <=  produtosFiltrados.length) {
            setTamanho(proximaQuantidade);

            const novosProdutos = produtosFiltrados.slice(0, proximaQuantidade);
            setProdutos([...novosProdutos]);
        } else {
            setProdutos(produtosFiltrados);
        }
    }

    return (
        <>
            <Container>
                {
                    produtos.map((produto, i) => (
                        <Card key={i} className="item">
                            <CardMedia
                                image={produto?.image}
                                component="img"
                                alt={produto?.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" textAlign="center" >
                                    {produto?.name}  {produto?.color}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" textAlign="center">
                                    <b>{produto?.price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>
                                </Typography>
                                <Typography gutterBottom variant="h8" component="div" textAlign="center" marginTop="10px">
                                    até {produto?.parcelamento[0]}x de {produto?.parcelamento[1]?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                </Typography>
                                <Link to="/carrinho" >
                                    <BotaoComprar sx={{ width: "100%", backgroundColor: "black", textAlign: "center" }} size="large" variant="contained" onClick={() => adicionarItem({ id: produto.id, name: produto.name, price: produto.price })}>
                                        COMPRAR
                                    </BotaoComprar>
                                </Link>
                            </CardContent>
                        </Card>
                    ))
                }
            </Container>
            {existeMaisProdutos &&
                <Button sx={{ width: "30%", marginLeft: "50%", marginTop: "7%" }} size="large" variant="contained" type="submit" onClick={() => handleClick()}>
                    CARREGAR MAIS
                </Button>
            }
        </>
    );
}

export default Pagina;