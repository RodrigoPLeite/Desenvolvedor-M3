import React from 'react';
import { Link } from "react-router-dom";
import CarrinhoCompras from "../../components/CarrinhoCompras";

import { Container, BotaoHome } from './styles';

const Carrinho = () => {
  return (
    <Container>
      <CarrinhoCompras />

      <Link style={{textDecoration: 'none'}} to="/" >
        <BotaoHome>Voltar Para Produtos</BotaoHome>
      </Link>
    </Container>
  );
}

export default Carrinho;