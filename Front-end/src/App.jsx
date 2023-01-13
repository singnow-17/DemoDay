import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import theme from './theme.js';
import Artista from './pages/Artista.jsx';
import VitrineP from './pages/VitrineP.jsx';
import Vitrine from './pages/Vitrine.jsx';
import Parceiro from './pages/Parceiro.jsx';
import Cadastro from './pages/Cadastro.jsx';

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cadastro" element={<Cadastro />}/>
                    <Route path="artistas" element={<Vitrine />} />
                    <Route path="artista" element={<Artista />} />
                    <Route path="parceiros" element={<VitrineP />} />
                    <Route path="parceiro" element={<Parceiro />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
