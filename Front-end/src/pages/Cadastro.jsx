import React from 'react';
import Conteudo from './componentes/Conteudo/Conteudo';

import { BrowserRouter } from 'react-router-dom';



function Cadastro() {
  return (
    <>
      <BrowserRouter>
        <Conteudo/>
      </BrowserRouter>
    </>    
  );
}

export default Cadastro;