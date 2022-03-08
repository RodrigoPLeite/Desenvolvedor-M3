import React from 'react';
import { Link } from "react-router-dom";
import CarrinhoCompras from "../../components/CarrinhoCompras";

import { Container } from './styles';

const Carrinho = () => {
  return (
    <Container>
      <CarrinhoCompras />

      <Link to="/" >
        <button>ir para home</button>
      </Link>
    </Container>
  );
}

export default Carrinho;