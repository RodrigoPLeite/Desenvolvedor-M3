import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
        <h1>Home</h1>;

        <Link to="/carrinho" >
        <button>ir para carrinho</button>
      </Link>
     </Container>
  );
}

export default Home;