import React from 'react';
import { useCarrinho } from '../../hooks/useCarrinho';

import { Container } from './styles';

const CarrinhoCompras = () => {

  const { carrinho, adicionarItem, removerItem } = useCarrinho();

  return (
    <Container>
        {carrinho.map(item => {
          console.log("Tela de carrinho", item)
        })}
        <h1>Qualquer coisa</h1>;
        <button onClick={() => { adicionarItem({ id: 1 }) }}>adicionar items ao carrinho</button>
     </Container>
  );
}

export default CarrinhoCompras;