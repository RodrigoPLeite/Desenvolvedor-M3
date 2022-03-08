import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CarrinhoProvider } from './hooks/useCarrinho';

import Rotas from './routes';

const App = () => {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Rotas />          
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;
