import React, { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarItem(item) {
    setCarrinho([
      ...carrinho,
      item
    ]);
  }

  function removerItem(id) {
    const carrinhoFiltrado = carrinho.filter(item => item.id !== id);

    setCarrinho(carrinhoFiltrado);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarItem,
        removerItem
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
    removerItem
  } = useContext(CarrinhoContext);

  return {
    carrinho,
    adicionarItem,
    removerItem
  };
}
