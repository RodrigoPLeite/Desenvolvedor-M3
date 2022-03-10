import React from 'react';
import { Link } from "react-router-dom";

import { useFiltro }  from '../../hooks/useFiltro';
import Pagina from '../Pagina';
import { BotoesFiltro, ContainerBotoesFiltro, Titulo } from './styles';

const SidebarCel = () => {
    const {
        valorEscolhido,
        produtosFiltrados,
        setValorEscolhido
    } = useFiltro();

    return (
        <>
            <Titulo>Blusas</Titulo>
            <ContainerBotoesFiltro>
                <Link to="/filtro-mobile" >
                    <BotoesFiltro>Filtrar</BotoesFiltro>
                </Link>
                <Link to="/ordenar-mobile" >
                    <BotoesFiltro>Ordenar</BotoesFiltro>
                </Link>
            </ContainerBotoesFiltro>                    
            <Pagina produtosFiltrados={produtosFiltrados} valorEscolhido={valorEscolhido} setValorEscolhido={setValorEscolhido} />
        </>
    )
}

export default SidebarCel;