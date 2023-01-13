import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function FormCadParceiro(props){
    return(
        <div >
            <div className="form-titulo">
                <span>Crie seu cadastro</span>
            </div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25vw' },}} autoComplete="off" className="formCadastro">
                <TextField id="nomeEmpresa" label="Nome da Empresa" type="text" variant="standard" value={props.nomeEmpresa} onChange={e => props.setNomeEmpresa(e.target.value)} />
                <TextField id="email" label="Email" type="email" variant="standard"   value={props.email} onChange={e => props.setEmail(e.target.value)} required/>
                <TextField id="senha" label="Senha" type="password" variant="standard" value={props.senha} onChange={e => props.setSenha(e.target.value)} required/>
            </Box>
            
            <div className='buttons'>
                <Button className='btn-voltar' disabled>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(1)}>Continuar</Button>
            </div>
        </div>
    );
}