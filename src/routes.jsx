import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import FiltroMobile from "./pages/FiltroMobile";
import OrdenarMobile from "./pages/OrdenarMobile";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/filtro-mobile" element={<FiltroMobile />} />
      <Route path="/ordenar-mobile" element={<OrdenarMobile />} />
    </Routes>
  );
};

export default Rotas;