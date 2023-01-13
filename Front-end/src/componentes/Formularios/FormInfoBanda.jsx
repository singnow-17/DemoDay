import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

export function FormInfoBanda (props){

    // Api do cep
    const ckeckCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            props.setRua(data.logradouro);
            props.setBairro(data.bairro);
            props.setCidade(data.localidade);
            props.setEstado(data.uf);
        });
    }    
    
    return(
        <div className="formInfoPessoal">
            <div className="form-titulo">
                <span>Informações pessoais</span>
            </div>
            <Box component="form" sx={{ width: '100%', height: '100%' }} noValidate autoComplete="off" className="formCadastro">
                 <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               
                    <Grid item xs={6}>
                        <TextField id="nomeResponsavel" label="Nome do responsável" variant="standard" value={props.nomeResponsavel} onChange={e => props.setNomeResponsavel(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="telefone" label="Telefone" type="tel" variant="standard" value={props.tel} onChange={e => props.setTel(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="cpf" label="CPF/CNPJ" variant="standard" value={props.cpf} onChange={e => props.setCpf(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="cep" label="CEP" variant="standard" value={props.cep} onChange={e => props.setCep(e.target.value)} onBlur={ckeckCEP} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="rua" label="Rua" type="text" variant="standard" value={props.rua} onChange={e => props.setRua(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="numero" label="N°" type="text" variant="standard" value={props.numero} onChange={e => props.setNumero(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="bairro" label="Bairro" type="text" variant="standard" value={props.bairro} onChange={e => props.setBairro(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="cidade" label="Cidade" type="text" variant="standard" value={props.cidade} onChange={e => props.setCidade(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="estado" label="Estado" type="text" variant="standard" value={props.estado} onChange={e => props.setEstado(e.target.value)} required/>
                    </Grid>
                </Grid>
            </Box>
            <div className='buttons'>
                <Button className='btn-voltar' onClick={() => props.setEtapa(0)}>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(2)}>Continuar</Button>
            </div>
        </div>
    );
}
