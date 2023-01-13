import './CadastroVisitante.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import { validNameResp, validEmail, validPassword } from '../Utils/Regex';
import {FormParabens} from '../Formularios/FormParabens';

export function CadastroVitante(){

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [politicaEmpresa, setPoliticaEmpresa] = React.useState("");
    const [termosEmpresa, setTermosEmpresa] = React.useState("");
    const mensagemErro = React.useRef(null);
    const mensagemTexto = React.useRef(null);

    const validate = () =>{
        if(nome == "" || email == "" || senha == ""){
            mensagemErro.current.classList.add("show");
            mensagemTexto.current.innerHTML = "Preencha todos os campos";
        }
        else if(validNameResp.test(nome)){
            if(nome){
                mensagemErro.current.classList.add("show");
                mensagemTexto.current.innerHTML = "Informe um nome válido";
            }
        }
        else if(!validEmail.test(email)){
            mensagemErro.current.classList.add("show");
            mensagemTexto.current.innerHTML = "Informe um e-mail válido";
        }
        else if(!validPassword.test(senha)){
            mensagemErro.current.classList.add("show");
            mensagemTexto.current.innerHTML = "A senha deve conter mais de 8 caracteres e simbolos";
        }
        else{
            <FormParabens/>
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nome, email, senha
        }
        console.log(data);
    }


    return(
        <div className="containerForm">
            <div className="formCadastroCard">
                <div className="form-titulo">
                    <span>Crie seu cadastro</span>
                </div>
                <form onSubmit={handleSubmit}>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '70%'},}} autoComplete="off" className='formulario'>
                    <TextField id="nome" label="Nome" type="text" variant="standard" value={nome} onChange={e => setNome(e.target.value)} required/>
                    <TextField id="email" label="Email" type="email" variant="standard" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <TextField id="senha" label="Senha" type="password" variant="standard" value={senha} onChange={e => setSenha(e.target.value)} required/>     
                </Box>
                
                <div className='buttons'>
                    {/* <button className='btn-cadastrar' onClick={validate}>Continuar</button> */}
                    <Button className='btn-cadastrar' onClick={() => validate()}>          
                        <Link to='/parabens' className='bnt-cont'>Continuar</Link>
                    </Button>
                </div>
                <Alert severity="error" ref={mensagemErro} className="msgErro"><span className="msgText" ref={mensagemTexto}>test</span></Alert>
           
                </form>
            </div>
        </div>
    )
}
