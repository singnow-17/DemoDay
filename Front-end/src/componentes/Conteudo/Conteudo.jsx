import React from "react";
import { Routes, Route } from "react-router-dom";

import {CardCadastro} from "../CardCadastro/CardCadastro";
import {CadastroBanda} from "../Cadastro/CadastroBanda";
import {CadastroParceiro} from "../Cadastro/CadastroParceiro";
import {CadastroArtista} from "../Cadastro/CadastroArtista";
import {CadastroVitante} from "../Cadastro/CadastroVisitante";
import {FormParabens} from "../Formularios/FormParabens";

const Conteudo = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<CardCadastro/>}/>
                <Route path="/cadastro-banda" element={<CadastroBanda/>}/>
                <Route path="/parabens" element={<FormParabens/>}/>
                <Route path="/cadastro-parceiro" element={<CadastroParceiro/>}/>
                <Route path="/cadastro-artista" element={<CadastroArtista/>}/>
                <Route path="/cadastro-visitante" element={<CadastroVitante/>}/>
            </Routes>
        </div>
    );
}

export default Conteudo;