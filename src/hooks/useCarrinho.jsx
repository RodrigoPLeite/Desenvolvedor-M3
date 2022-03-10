import React, { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function adicionarItem(item) {   
    const carrinhoAtualizado = [...carrinho];
    const produtoExiste = carrinhoAtualizado.find(product => product.id === item.id);

    if (produtoExiste) {
      produtoExiste.quantidade = produtoExiste.quantidade + 1;
    } else {
      const novoProduto = { 
        index: carrinho.length,
        quantidade: 1,
        ...item
      };

      carrinhoAtualizado.push(novoProduto);
    }

    setCarrinho(carrinhoAtualizado);
    totalCarrinho(carrinhoAtualizado);
  }

  function removerItem(index) {
    const carrinhoFiltrado = carrinho.filter(item => item.index !== index);

    setCarrinho(carrinhoFiltrado);
    totalCarrinho(carrinhoFiltrado);
  }

  function totalCarrinho(carrinho) {
    const total = carrinho.reduce((acc, current) => acc + (current.price * current.quantidade), 0);
    console.log("carrinho", carrinho);
    setTotalPrice(total);
  }

  function diminuirQuantidade(index) {
    const carrinhoAtualizado = [...carrinho];
    const produtoExiste = carrinhoAtualizado.find(product => product.index === index);

    if (!produtoExiste || (produtoExiste.quantidade <= 1)) {
      return;
    }

    produtoExiste.quantidade = produtoExiste.quantidade - 1;

    setCarrinho(carrinhoAtualizado);
    totalCarrinho(carrinhoAtualizado);
  }

  function aumentarQuantidade(index) {
    const carrinhoAtualizado = [...carrinho];
    const produtoExiste = carrinhoAtualizado.find(product => product.index === index);

    if (!produtoExiste) {
      return;
    } 

    produtoExiste.quantidade = produtoExiste.quantidade + 1;

    setCarrinho(carrinhoAtualizado);
    totalCarrinho(carrinhoAtualizado);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarItem,
        removerItem,
        totalPrice,
        diminuirQuantidade,
        aumentarQuantidade
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const {
    carrinho,
    adicionarItem,
    removerItem,
    totalPrice,
    diminuirQuantidade,
    aumentarQuantidade
  } = useContext(CarrinhoContext);

  return {
    carrinho,
    adicionarItem,
    removerItem,
    totalPrice,
    diminuirQuantidade,
    aumentarQuantidade
  };
}
