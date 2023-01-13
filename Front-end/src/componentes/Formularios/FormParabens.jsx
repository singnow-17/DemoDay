import * as React from 'react';
import '../Formularios/FormParabens.css';
import dance from '../img/parabens.gif';
import { Link } from 'react-router-dom';

export function FormParabens(){
    return(
        <div className='formParabens'>
            <div className='formParabens-container'>
                <div className='danceGif'>
                    <img src={dance}/>
                </div>
                <span>Parabéns por concluir o seu cadastro</span>
                <Link to='/perfil-artista' className='btn'>Continuar</Link>
            </div>
        </div>
    );
}