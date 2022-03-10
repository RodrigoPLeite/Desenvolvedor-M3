import React, { createContext, useContext, useState } from "react";

const FiltroContext = createContext();

export function FiltroProvider({ children }) {
  const [cor, setCor] = useState("Todas");
  const [faixaPreco, setFaixaPreco] = useState("0,1000000");
  const [tamanho, setTamanho] = useState("T");

  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [valorEscolhido, setValorEscolhido] = useState(1);
  const [atualizar, setAtualizar] = useState(false);
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(false);

  const filtrar = () => {
    const precos = faixaPreco.split(",");

    const filtrados = produtos
      .sort((a, b) => {
        if (valorEscolhido === 2) {
          return +(a.price > b.price) || +(a.price === b.price) - 1;
        } else if (valorEscolhido === 3) {
          return +(a.price < b.price) || +(a.price === b.price) - 1;
        } else if (valorEscolhido === 1) {
          return +(a.date < b.date) || +(a.date === b.date) - 1;
        }
      })
      .filter(produto => produto.price >= precos[0] && produto.price < precos[1])
      .filter(produto => produto.color === cor || cor === 'Todas')
      .filter(produto => {
        for (let i = 0; i < produto.size.length; i++) {
          if (tamanho === produto.size[i]) {
            return produto.size[i];
          } else if (tamanho === 'T') {
            return produto;
          }
        }
      });

    setProdutosFiltrados(filtrados);
    setAtualizar(!atualizar);
  }

  function loading(produtos) {
    setProdutos(produtos);
    setPrimeiroCarregamento(!primeiroCarregamento);
  } 

  return (
    <FiltroContext.Provider
      value={{
        valorEscolhido,
        filtrar,
        cor, 
        setCor, 
        setTamanho,
        tamanho,
        setFaixaPreco, 
        faixaPreco, 
        produtosFiltrados, 
        setValorEscolhido,
        setProdutos,
        setProdutosFiltrados,
        atualizar,
        setAtualizar,
        loading,
        primeiroCarregamento,
      }}
    >
      {children}
    </FiltroContext.Provider>
  );
}

export function useFiltro() {
  const {
    valorEscolhido, 
    filtrar,
    cor, 
    setCor, 
    setTamanho, 
    setFaixaPreco, 
    faixaPreco, 
    produtosFiltrados, 
    setValorEscolhido,
    setProdutos,
    setProdutosFiltrados,
    atualizar,
    setAtualizar,
    loading,
    primeiroCarregamento,
    tamanho
  } = useContext(FiltroContext);

  return {
    valorEscolhido,
    filtrar,
    cor, 
    setCor,
    setTamanho, 
    setFaixaPreco, 
    faixaPreco, 
    produtosFiltrados, 
    setValorEscolhido,
    setProdutos,
    setProdutosFiltrados,
    atualizar,
    setAtualizar,
    loading,
    primeiroCarregamento,
    tamanho
  };
}
