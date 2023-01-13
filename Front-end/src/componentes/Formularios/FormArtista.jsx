import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './FormArtista.css'
import Button from '@mui/material/Button';


export function FormArtista(props){
    return(
        <div className="formCadastroCard">
              <div className="form-titulo">
                <span>Crie seu cadastro</span>
            </div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25vw' },}} autoComplete="off" className="formArtista">
                <TextField id="nomeArt" label="Nome Artistíco" type="text" variant="standard" value={props.nomeArtista} onChange={e => props.setNomeArtista(e.target.value)} required/>
                <TextField id="email" label="Email" type="email" variant="standard" value={props.emailArtista} onChange={e => props.setEmailArtista(e.target.value)} required/>
                <TextField id="senha" label="Senha" type="password" variant="standard" value={props.senha} onChange={e => props.setSenha(e.target.value)} required/>
            </Box>
            <div className='buttons'>
                <Button className='btn-voltar' disabled>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(1)}>Continuar</Button>
            </div>
        </div>
    );
}

