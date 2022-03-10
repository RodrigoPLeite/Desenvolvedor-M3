import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { FiltroProvider } from './hooks/useFiltro';
import { CarrinhoProvider } from './hooks/useCarrinho';

import Rotas from './routes';

const App = () => {
  return (
    <FiltroProvider>
      <CarrinhoProvider>
        <BrowserRouter>
          <Rotas />          
        </BrowserRouter>
      </CarrinhoProvider>
    </FiltroProvider>
  );
}

export default App;
