import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function FormInfoResponsavel (props){
    return(
        <div className="formInfoPessoal">
            <div className="form-titulo">
                <span>Informações do Responsável</span>
            </div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25vw' },}} autoComplete="off" className="formCadastro">
                <TextField id="nomeResponsavel" label="Nome Completo" variant="standard" value={props.nomeResp} onChange={e => props.setNomeResp(e.target.value)} required/>
                <TextField id="cpf" label="CPF" variant="standard" value={props.cpfResp} onChange={e => props.setCpfResp(e.target.value)} required/>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                    disableFuture
                    views={["day", "month", "year"]}
                    inputFormat="DD/MM/YYYY"
                    label="Data de nascimento"
                    value={props.dataNasc}
                    onChange={e => props.setDataNasc(e)}
                    renderInput={(params) => <TextField {...params} variant="standard"/>}
                    /> 
                </LocalizationProvider>
            </Box>
            <div className='buttons'>
                <Button className='btn-voltar' onClick={() => props.setEtapa(1)}>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(3)}>Continuar</Button>
            </div>  
        </div>
    );
}
