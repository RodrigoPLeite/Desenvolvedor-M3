import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
};

export default Rotas;