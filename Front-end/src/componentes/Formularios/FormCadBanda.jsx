import React from "react";
import '../Formularios/FormCadBanda.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export function FormCadBanda(props){
    return(
        <div className="formCadastro">
            <div className="form-titulo">
                <span>Crie seu cadastro</span>
            </div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25vw' },}} className="formCadastro" autoComplete="off">
                
                <TextField id="nomeBanda" label="Nome da Banda" type="text" variant="standard" value={props.nomeBanda} onChange={e => props.setNomeBanda(e.target.value)} required/>

                <FormControl variant="standard" className="form-control">
                    <InputLabel id="numeroIntegrantes" required>N° de Integrantes</InputLabel>
                    <Select labelId="numeroIntegrantes" id="numeroIntegrantes" label="N° de Integrantes" value={props.numeroIntegrantes} onChange={e => props.setNumeroIntegrantes(e.target.value)} >
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                        <MenuItem value={"5"}>5</MenuItem>
                        <MenuItem value={"+6"}>+6</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="email" label="Email" type="email" variant="standard" value={props.emailBanda} onChange={e => props.setEmailBanda(e.target.value)} required/>
                <TextField id="senha" label="Senha" type="password" variant="standard" value={props.senha} onChange={e => props.setSenha(e.target.value)} required/>
            </Box>
            <div className='buttons'>
                <Button className='btn-voltar' disabled>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(1)}>Continuar</Button>
            </div>
        </div>
    );
}

