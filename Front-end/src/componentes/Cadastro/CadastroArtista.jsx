import '../Formularios/FormArtista.css';
import './CadastroArtista.css';
import * as React from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Alert, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {FormInfoBanda} from '../Formularios/FormInfoBanda';
import {FormGeneroMusical} from '../Formularios/FormGeneroMusical';
import {FormTermos} from '../Formularios/FormTermos';
import {FormParabens} from '../Formularios/FormParabens';
import { FormArtista } from '../Formularios/FormArtista';

import { validEmail, validPassword, validCPF, validNumber, validPhone, validNameResp } from '../Utils/Regex';

//Estrutura dos passos do formulário
const steps = [
    {
        titulo: '1ª Etapa',
        descricao: 'Criar seu cadastro na plataforma',
        etapa: 'Criar Cadastro'
    },
    {
        titulo: '2ª Etapa',
        descricao: 'Inserir suas informações pessoais',
        etapa: 'Informação Pessoal'
    },
    {
        titulo: '3ª Etapa',
        descricao: 'Escolher gêneros musicais',
        etapa: 'Estilo Musical'
    },
    {
        titulo: '4ª Etapa',
        descricao: 'Aceitar os termos de uso da plataforma',
        etapa: 'Termos da plataforma'
    }
];


export function CadastroArtista(){

    //Iniciando com o valor de 0 para renderizar o primeiro item do array
    const [etapa, setEtapa] = React.useState(0);

    //Costumização
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


    const [nomeArtista, setNomeArtista] = React.useState('');
    const [emailArtista, setEmailArtista] = React.useState('');
    const [senha, setSenha] = React.useState('');
  
    const [nomeResponsavel, setNomeResponsavel] = React.useState('');
    const [dataNasc, setDataNasc] = React.useState(null);
    const [tel, setTel] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [cep, setCep] = React.useState('');
    const [rua, setRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');

    const [afroPop, setAfro] = React.useState('');
    const [axe, setAxe] = React.useState('');
    const [black, setBlack] = React.useState('');
    const [blues, setBlues] = React.useState('');
    const [bossaN, setBossaN] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [eletronica, setEletronica] = React.useState('');
    const [forro, setForro] = React.useState('');
    const [funk, setFunk] = React.useState('');
    const [gospel, setGospel] = React.useState('');
    const [hipHop, setHipHop] = React.useState('');
    const [heavyMetal, setHeavyMetal] = React.useState('');
    const [jazz, setJazz] = React.useState('');
    const [kpop, setKpop] = React.useState('');
    const [mambo, setMambo] = React.useState('');
    const [muscAmbiente, setMuscAmbiente] = React.useState('');
    const [musicClassica, setMusicClassica] = React.useState('');
    const [mpb, setMpb] = React.useState('');
    const [pagode, setPagode] = React.useState('');
    const [pop, setPop] = React.useState('');
    const [punk, setPunk] = React.useState('');
    const [rap, setRap] = React.useState('');
    const [reggae, setReggae] = React.useState('');
    const [reggaeton, setReggaeton] = React.useState('');
    const [rock, setRock] = React.useState('');
    const [rockAlt, setRockAlt] = React.useState('');
    const [samba, setSamba] = React.useState('');
    const [sambaRock, setSambaRock] = React.useState('');
    const [sertanejo, setSertanejo] = React.useState('');
    const [trap, setTrap] = React.useState('');

    const [politicaEmpresa, setPoliticaEmpresa] = React.useState(false);
    const [termosEmpresa, setTermosEmpresa] = React.useState(false);

    const mensagemErro = React.useRef(null);
    const mensagemTexto = React.useRef(null);

    //Validação dos campos
    function proximaEtapa(etapaAtual){
        switch(etapaAtual){
            case 1:
                if(nomeArtista == "" || emailArtista == "" || senha == ""){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Preencha todos os campos";
                }
                else if(!validEmail.test(emailArtista)){
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
                if(nomeResponsavel == "" || dataNasc == null || tel == "" || cpf == "" || cep == "" || rua == "" || numero == "" || bairro == "" || cidade == "" || estado == ""){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Preencha todos os campos";
                }
                else if(validNameResp.test(nomeResponsavel)){
                    if(nomeResponsavel){
                        mensagemErro.current.classList.add("show");
                        mensagemTexto.current.innerHTML = "Informe um nome válido";
                    }
                }
                else if(!validPhone.test(tel)){
                    if(tel > 11){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um número de telefone válido";
                    }
                    else{
                        mensagemErro.current.classList.add("show");
                        mensagemTexto.current.innerHTML = "Informe somente números no telefone";
                    }
                }
                else if(!validCPF.test(cpf)){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Informe um CPF/CNPJ válido";
                }
                else if(numero.length > 4 || isNaN(numero)){
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
                if(!afroPop && !axe && !black && !blues && !bossaN && !country && !eletronica && !forro && !funk && !gospel && !hipHop && !heavyMetal && !jazz && !kpop && !mambo && !muscAmbiente && !musicClassica && !mpb && !pagode && !pop && !punk && !rap && !reggae && !reggaeton && !rock && !rockAlt && !samba && !sambaRock && !sertanejo && !trap){
                    mensagemErro.current.classList.add("show");
                    mensagemTexto.current.innerHTML = "Selecione no mínino um gênero musical";
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
                }
                break;
            }
        }


    //Pegando o formulario pelo indice da etapa
    const getCompSetp = () =>{
        switch(etapa){
            case 0:
                return <FormArtista
                nomeArtista={nomeArtista} setNomeArtista={setNomeArtista}
                emailArtista={emailArtista} setEmailArtista={setEmailArtista}
                senha={senha} setSenha={setSenha}
                proximaEtapa={proximaEtapa}
                setEtapa={setEtapa}
                />;
            break;
            case 1:
                return <FormInfoBanda 
                nomeResponsavel={nomeResponsavel} setNomeResponsavel={setNomeResponsavel}
                dataNasc={dataNasc} setDataNasc={setDataNasc}
                tel={tel} setTel={setTel}
                cpf={cpf} setCpf={setCpf}
                cep={cep} setCep={setCep}
                rua={rua} setRua={setRua}
                numero={numero} setNumero={setNumero}
                bairro={bairro} setBairro={setBairro}
                cidade={cidade} setCidade={setCidade}
                estado={estado} setEstado={setEstado}
                proximaEtapa={proximaEtapa}
                setEtapa={setEtapa}
                />
            break;
            case 2:
                return <FormGeneroMusical
                afroPop={afroPop} setAfro={setAfro}
                axe={axe} setAxe={setAxe}
                black={black} setBlack={setBlack}
                blues={blues} setBlues={setBlues}
                bossaN={bossaN} setBossaN={setBossaN}
                country={country} setCountry={setCountry}
                eletronica={eletronica} setEletronica={setEletronica}
                forro={forro} setForro={setForro}
                funk={funk} setFunk={setFunk}
                gospel={gospel} setGospel={setGospel}
                hipHop={hipHop} setHipHop={setHipHop}
                heavyMetal={heavyMetal} setHeavyMetal={setHeavyMetal}
                jazz={jazz} setJazz={setJazz}
                kpop={kpop} setKpop={setKpop}
                mambo={mambo} setMambo={setMambo}
                muscAmbiente={muscAmbiente} setMuscAmbiente={setMuscAmbiente}
                musicClassica={musicClassica} setMusicClassica={setMusicClassica}
                mpb={mpb} setMpb={setMpb}
                pagode={pagode} setPagode={setPagode}
                pop={pop} setPop={setPop}
                punk={punk} setPunk={setPunk}
                rap={rap} setRap={setRap}
                reggae={reggae} setReggae={setReggae}
                reggaeton={reggaeton} setReggaeton={setReggaeton}
                rock={rock} setRock={setRock}
                rockAlt={rockAlt} setRockAlt={setRockAlt}
                samba={samba} setSamba={setSamba}
                sambaRock={sambaRock} setSambaRock={setSambaRock}
                sertanejo={sertanejo} setSertanejo={setSertanejo}
                trap={trap} setTrap={setTrap}
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
                return "Erro";
        }
    }

    return(
        <div className='container-cad'>
            <div className='conteudo-cad'>
            <Card sx={{ display: 'flex', maxWidth: 800, height:490, borderRadius:5, boxShadow:5}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#FA9201', p:2, minWidth:144, width:'15vw', height:490, overflow:'hidden'}}>
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
                    <Alert severity="error" ref={mensagemErro} className="msgErro hide"><span className="msgText" ref={mensagemTexto}></span></Alert>
                </Box>
            </Card>
            </div>
        </div>
    );
}

