import './CadastroParceiro.css';
import * as React from 'react';


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

import { FormCadParceiro } from '../Formularios/FormCadParceiro';
import { FormInfoParceiro } from '../Formularios/FormInfoParceiro';
import { FormInfoResponsavel } from '../Formularios/FormInfoResponsavel';
import {FormTermos} from '../Formularios/FormTermos'
import { validEmail, validPassword, validCPF, validNumber, validPhone, validNameResp } from '../Utils/Regex';
//Estrutura das etapas do formulário
const steps = [
    {
        titulo: '1ª Etapa',
        descricao: 'Criar seu cadastro na plataforma',
        etapa: 'Criar Cadastro'
    },
    {
        titulo: '2ª Etapa',
        descricao: 'Inserir informações da sua empresa',
        etapa: 'Informação da Empresa'
    },
    {
        titulo: '3ª Etapa',
        descricao: 'Inserir suas informações pessoais',
        etapa: 'Informações do Responsável'
    },
    {
        titulo: '4ª Etapa',
        descricao: 'Aceitar os termos de uso da plataforma',
        etapa: 'Termos da plataforma'
    },
];

export function CadastroParceiro(){

    //Iniciando com o valor de 0 para renderizar o primeiro item do array
    const [etapa, setEtapa] = React.useState(0);

    //Costumização das etapas 
    const theme = createTheme({
        palette: {
        primary: {
            main: '#FFF',
            contrastText: '#000',
            backgroundColor: '#FA9201'
        },
        },
        typography: {
            fontFamily: 'Montserrat'
        }
    });

    //Componentes contrados
    const [nomeEmpresa, setNomeEmpresa] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const [cnpj, setCnpj] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [cepEmpresa, setCepEmpresa] = React.useState("");
    const [ruaEmpresa, setRuaEmpresa] = React.useState("");
    const [numeroEmpresa, setNumeroEmpresa] = React.useState("");
    const [bairroEmpresa, setBairroEmpresa] = React.useState("");
    const [cidadeEmpresa, setCidadeEmpresa] = React.useState("");
    const [estadoEmpresa, setEstadoEmpresa] = React.useState("");

    const [nomeResp, setNomeResp] = React.useState("");
    const [cpfResp, setCpfResp] = React.useState("");
    const [dataNasc, setDataNasc] = React.useState(null);

    const [politicaEmpresa, setPoliticaEmpresa] = React.useState("");
    const [termosEmpresa, setTermosEmpresa] = React.useState("");

    const mensagemErro = React.useRef(null);
    const mensagemTexto = React.useRef(null);

    //Validação dos campos
    function proximaEtapa(etapaAtual){
        switch(etapaAtual){
            case 1:
                if(nomeEmpresa == "" || email == "" || senha == ""){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Preencha todos os campos";
                }
                else if(!validEmail.test(email)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um e-mail válido";
                }
                else if(!validPassword.test(senha)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "A senha deve conter mais de 8 caracteres e simbolos";
                }
                else {
                    mensagemErro.current.classList.remove("show");
                    mensagemTexto.current.innerHTML = "";
                    setEtapa(1)
                }
                break;
            case 2:
                if(cnpj == "" || tel == "" || cepEmpresa == "" || ruaEmpresa == "" || numeroEmpresa == "" || bairroEmpresa == "" || cidadeEmpresa == "" || estadoEmpresa == ""){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Preencha todos os campos";
                }
                else if(!validCPF.test(cnpj)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um CNPJ válido";
                }
                else if(!validPhone.test(tel)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe somente números no telefone";
                }
                else if(numeroEmpresa.length > 4 || isNaN(numeroEmpresa)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um número válido";                    
                }
                else {
                    mensagemErro.current.classList.remove("show");
                    mensagemTexto.current.innerHTML = "";
                    setEtapa(2)
                }
                break;
            case 3:
                if(nomeResp == "" || cpfResp == "" || dataNasc == null){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Preencha todos os campos";
                }
                else if(validNameResp.test(nomeResp)){
                    if(nomeResp){
                        mensagemErro.current.classList.add("show");
                        mensagemTexto.current.innerHTML = "Informe um nome válido";
                    }
                }
                else if(!validCPF.test(cpfResp)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um CPF válido";
                }
                else {
                    mensagemErro.current.classList.remove("show");
                    mensagemTexto.current.innerHTML = "";
                    setEtapa(3)
                }
                break;
            case 4:
                if(!politicaEmpresa || !termosEmpresa){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Aceite os termos de uso e a politica de privacidade";
                }else {
                    mensagemErro.current.classList.remove("show");
                    mensagemTexto.current.innerHTML = "";
                    setEtapa(4)
                }
                break;
        }
    }

    //Pegando o formulario pelo indice da etapa
    const getCompSetp = () =>{
        switch(etapa){
            case 0:
                return <FormCadParceiro 
                nomeEmpresa={nomeEmpresa} setNomeEmpresa={setNomeEmpresa}
                email={email} setEmail={setEmail}
                senha={senha} setSenha={setSenha}
                proximaEtapa={proximaEtapa}
            />
            break;
            case 1:
                return <FormInfoParceiro
                cnpj={cnpj} setCnpj={setCnpj}
                tel={tel} setTel={setTel}
                cepEmpresa={cepEmpresa} setCepEmpresa={setCepEmpresa}
                ruaEmpresa={ruaEmpresa} setRuaEmpresa={setRuaEmpresa}
                numeroEmpresa={numeroEmpresa} setNumeroEmpresa={setNumeroEmpresa}
                bairroEmpresa={bairroEmpresa} setBairroEmpresa={setBairroEmpresa}
                cidadeEmpresa={cidadeEmpresa} setCidadeEmpresa={setCidadeEmpresa}
                estadoEmpresa={estadoEmpresa} setEstadoEmpresa={setEstadoEmpresa}
                proximaEtapa={proximaEtapa}
                setEtapa={setEtapa}
            />
            break;
            case 2:
                return <FormInfoResponsavel
                nomeResp={nomeResp} setNomeResp={setNomeResp}
                cpfResp={cpfResp} setCpfResp={setCpfResp}
                dataNasc={dataNasc} setDataNasc={setDataNasc}
                proximaEtapa={proximaEtapa}
                setEtapa={setEtapa}
            />
            break;
            case 3:
                return <FormTermos
                politicaEmpresa={politicaEmpresa} setPoliticaEmpresa={setPoliticaEmpresa}
                termosEmpresa={termosEmpresa} setTermosEmpresa={setTermosEmpresa}
                proximaEtapa={proximaEtapa}
                setEtapa={setEtapa}
            />
            break;
            default:
                return 'Erro';
        }
    }

    return(
        <div className='container-cad'>
            <div className='conteudo-cad'>
            <Card sx={{ display: 'flex', maxWidth: 800, borderRadius:5, boxShadow:5}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#FA9201', p:2, minWidth:144, width:'15vw', height:450, overflow:'hidden'}}>
                    <ThemeProvider theme={theme}>
                            
                        <Typography className='titulo' variant='h6'>{steps[etapa].titulo}</Typography>
                        <Typography>{steps[etapa].descricao}</Typography>
                        
                        <Stepper activeStep={etapa} orientation='vertical' className='etapas'> 
                            {steps.map((step) => (
                                <Step key={step.etapa}>
                                    <StepLabel>{step.etapa}</StepLabel>
                                </Step>
                            ))}         
                        </Stepper>
                    </ThemeProvider>
                </Box>
                <Box className='form' sx={{ alignItems: 'center', p:1, marginTop:2, width:'30vw', height:434}}>
                    
                    {getCompSetp()}

                    <Alert severity="error" ref={mensagemErro} className="msgErro"><span className="msgText" ref={mensagemTexto}>test</span></Alert>
                
                </Box>
            </Card>
            </div>
        </div>
    );
}