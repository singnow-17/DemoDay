import * as React from 'react';
import { Link } from 'react-router-dom';
import musico from '../img/musicosolo.png';
import banda from '../img/banda.png';
import './CardCadastro.css';


export function CardCadastro(){

    return(
        <div className='card-container'>
            <div className='card'>
                <div className='img-card'>
                    <img className='imagem' src={musico}/>
                </div>
                <div className='conteudo'>
                    <h3>Artista Solo</h3>
                    <p>&bull; Para um artista de carreira solo e quer crescer com a gente, esse perfil é para você</p>
                    <Link to='/cadastro-artista' className='btn'>Continuar</Link>
                </div>
            </div>

            <div className='card'>
                <div className='img-card'>
                    <img className='imagem' src={banda}/>
                </div>
                <div className='conteudo'>
                    <h3>Banda</h3>
                    <p>&bull; Se você possui uma dupla, trio ou mais e quer crescer com a gente, esse perfil é para você</p>
                    <Link to='/cadastro-banda' className='btn'>Continuar</Link>
                </div>
            </div>
        </div>
    );
}
