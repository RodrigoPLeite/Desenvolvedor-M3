import React, { useState } from 'react';
import { useCarrinho } from '../../hooks/useCarrinho';
import Navbar from '../../components/Navbar';

import { Container, Header, Nav, NavBarActions, BotaoQuantidade, BotaoRemover, Table } from './styles';

const CarrinhoCompras = () => {
  const { carrinho, removerItem, totalPrice, diminuirQuantidade, aumentarQuantidade } = useCarrinho();

  return (
    <Container>
      <Navbar />
        <Header>
          <Nav>
            <NavBarActions>
              <h2 style={{color:'blue', fontSize:'30px'}}>Produtos no carrinho</h2>
              <span style={{color:'blue', fontSize:'20px'}}>Total dos Produtos: <b>{totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></span>
            </NavBarActions>
          </Nav>
        </Header>
        <main>
          <section>
              {carrinho.map((item, i) => (
              <Table key={i} >
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>SubTotal</th>
                </tr>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{item.quantidade}</td>
                  <td>{(item.quantidade * item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                  <td>
                  <BotaoQuantidade onClick={() => diminuirQuantidade(item.index)}>-</BotaoQuantidade>
                  <BotaoQuantidade onClick={() => aumentarQuantidade(item.index)}>+</BotaoQuantidade>
                  <BotaoRemover onClick={() => { removerItem(item.index) }}>Remover</BotaoRemover>
                  </td>
                </tr>
              </Table>
                ))}
          </section>
        </main>
    </Container>
  );
}

export default CarrinhoCompras;