import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import SidebarCel from '../../components/SidebarCel';
import Api from '../../components/Api';
import { useFiltro }  from '../../hooks/useFiltro';

import { Container } from './styles';

const Home = () => {
  const {
    filtrar,
    loading,
    primeiroCarregamento
   } = useFiltro();
  

  useEffect(() => {
    Api.get(`products`)
      .then(res => {
        loading(res.data);
      })
  }, []);

  useEffect(() => {
    filtrar();
  }, [primeiroCarregamento]);

  return (
    <Container>
      <Navbar />
      <div className="mobile">
        <SidebarCel />
      </div>
      <div className="desktop">
        <Sidebar />
      </div>
    </Container>
  );
}

export default Home;