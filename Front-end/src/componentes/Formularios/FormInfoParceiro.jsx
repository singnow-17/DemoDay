import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export function FormInfoParceiro (props){
    // Api do cep
    const ckeckCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        // if(cep.legth !== 8){
        //     return;
        // }
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            props.setRuaEmpresa(data.logradouro);
            props.setBairroEmpresa(data.bairro);
            props.setCidadeEmpresa(data.localidade);
            props.setEstadoEmpresa(data.uf);
        });
    }

    return(
        <div className="formInfoPessoal">
            <div className="form-titulo">
                <span>Informações da Empresa</span>
            </div>
            <Box component="form" sx={{ width: '100%', height: '100%' }} noValidate autoComplete="off" className="formCadastro">
                 <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField id="cnpj" label="CNPJ" variant="standard" value={props.cnpj} onChange={e => props.setCnpj(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="telefone" label="Telefone" type="tel" variant="standard" value={props.tel} onChange={e => props.setTel(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="cep" label="CEP" variant="standard" value={props.cepEmpresa} onChange={e => props.setCepEmpresa(e.target.value)} onBlur={ckeckCEP} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="rua" label="Rua" variant="standard" value={props.ruaEmpresa} onChange={e => props.setRuaEmpresa(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="numero" label="Numero" variant="standard" value={props.numeroEmpresa} onChange={e => props.setNumeroEmpresa(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="bairro" label="Bairro" variant="standard" value={props.bairroEmpresa} onChange={e => props.setBairroEmpresa(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="cidade" label="Cidade" variant="standard" value={props.cidadeEmpresa} onChange={e => props.setCidadeEmpresa(e.target.value)} required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="estado" label="Estado" variant="standard" value={props.estadoEmpresa} onChange={e => props.setEstadoEmpresa(e.target.value)} required/>
                    </Grid>
                </Grid>
                <div className='buttons'>
                    <Button className='btn-voltar' onClick={() => props.setEtapa(0)}>Voltar </Button>
                    <Button className='btn-continuar' onClick={() => props.proximaEtapa(2)}>Continuar</Button>
                </div>                
            </Box>
        </div>
    );
}
