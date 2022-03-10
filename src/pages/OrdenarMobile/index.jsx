import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useFiltro } from '../../hooks/useFiltro';

import { BotoesFiltro, ContainerBotoesFiltro } from './styles';

const OrdenarMobile = () => {
  const { setValorEscolhido } = useFiltro();

  return (
    <>
      <h1 style={{ fontSize: "50px", marginTop: "5%", borderBottom: "3px solid grey" }}>FILTRAR
      <Link to="/" style={{textDecoration: "none"}}>
        <span style={{paddingLeft: "120px", fontSize: "30px", color: "black" }}>x</span>
      </Link>
      </h1>
     
        <ContainerBotoesFiltro>
          <Link to= "/">
            <BotoesFiltro onClick={(() => setValorEscolhido(1))}>Mais Recentes</BotoesFiltro>
          </Link>
          <Link to= "/">
            <BotoesFiltro onClick={(() => setValorEscolhido(2))}>Menor Preço</BotoesFiltro>
          </Link>
          <Link to= "/">
            <BotoesFiltro onClick={(() => setValorEscolhido(3))}>Maior Preço</BotoesFiltro>
          </Link>
        </ContainerBotoesFiltro>
    </>
  )
}

export default OrdenarMobile;