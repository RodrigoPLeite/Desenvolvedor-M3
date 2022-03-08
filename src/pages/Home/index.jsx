import React from 'react';
import { Link } from "react-router-dom";
import { useCarrinho } from '../../hooks/useCarrinho';

import { Container } from './styles';

const Home = () => {
  const { carrinho } = useCarrinho();

  return (
    <Container>
        {carrinho.map(item => {
          console.log("Tela Home", item)
        })}
        <h1>Home</h1>;

        <Link to="/carrinho" >
          <button>ir para carrinho</button>
        </Link>
     </Container>
  );
}

export default Home;