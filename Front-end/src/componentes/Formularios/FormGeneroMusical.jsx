import React from "react";
import './FormGeneroMusical.css';
import Button from '@mui/material/Button';

export function FormGeneroMusical(props){
    return(
        <div>
            <div className="form-titulo">
                <span>Informe seus gêneros musicais</span>
            </div>
            <div className="formGenero">
                <ul className="boxs-container">
                    <li><input type="checkbox" id="music_afro" checked={props.afroPop} onChange={e => props.setAfro(!props.afroPop)}/><label for="music_afro">Afroppop</label></li>
                    <li><input type="checkbox" id="music_axe" checked={props.axe} onChange={e => props.setAxe(!props.axe)}/><label for="music_axe">Axé</label></li>
                    <li><input type="checkbox" id="music_black" checked={props.black} onChange={e => props.setBlack(!props.black)}/><label for="music_black">Black Music</label></li>
                    <li><input type="checkbox" id="music_blues" checked={props.blues} onChange={e => props.setBlues(!props.blues)}/><label for="music_blues">Blues</label></li>
                    <li><input type="checkbox" id="music_bossaN" checked={props.bossaN} onChange={e => props.setBossaN(!props.bossaN)}/><label for="music_bossaN">Bossa Nova</label></li>
                    <li><input type="checkbox" id="music_country" checked={props.country} onChange={e => props.setCountry(!props.country)}/><label for="music_country">Country</label></li>
                    <li><input type="checkbox" id="music_eletr" checked={props.eletronica} onChange={e => props.setEletronica(!props.eletronica)}/><label for="music_eletr">Eletrônica</label></li>
                    <li><input type="checkbox" id="music_forro" checked={props.forro} onChange={e => props.setForro(!props.forro)}/><label for="music_forro">Forró</label></li>
                    <li><input type="checkbox" id="music_funk" checked={props.funk} onChange={e => props.setFunk(!props.funk)}/><label for="music_funk">Funk</label></li>
                    <li><input type="checkbox" id="music_gospel" checked={props.gospel} onChange={e => props.setGospel(!props.gospel)}/><label for="music_gospel">Gospel</label></li>
                    <li><input type="checkbox" id="music_hiphop" checked={props.hipHop} onChange={e => props.setHipHop(!props.hipHop)}/><label for="music_hiphop">Hip Hop</label></li>
                    <li><input type="checkbox" id="music_heavymetal" checked={props.heavyMetal} onChange={e => props.setHeavyMetal(!props.heavyMetal)}/><label for="music_heavymetal">Heavy Metal</label></li>
                    <li><input type="checkbox" id="music_jazz" checked={props.jazz} onChange={e => props.setJazz(!props.jazz)}/><label for="music_jazz">Jazz</label></li>
                    <li><input type="checkbox" id="music_kpop" checked={props.kpop} onChange={e => props.setKpop(!props.kpop)}/><label for="music_kpop">K-pop</label></li>
                    <li><input type="checkbox" id="music_mambo" checked={props.mambo} onChange={e => props.setMambo(!props.mambo)}/><label for="music_mambo">Mambo</label></li>
                    <li><input type="checkbox" id="music_ambiente" checked={props.muscAmbiente} onChange={e => props.setMuscAmbiente(!props.muscAmbiente)}/><label for="music_ambiente">Música Ambiente</label></li>
                    <li><input type="checkbox" id="music_classica" checked={props.musicClassica} onChange={e => props.setMusicClassica(!props.musicClassica)}/><label for="music_classica">Música Clássica</label></li>
                    <li><input type="checkbox" id="music_mpb" checked={props.mpb} onChange={e => props.setMpb(!props.mpb)}/><label for="music_mpb">MPB</label></li>
                    <li><input type="checkbox" id="music_pagode" checked={props.pagode} onChange={e => props.setPagode(!props.pagode)}/><label for="music_pagode">Pagode</label></li>
                    <li><input type="checkbox" id="music_pop" checked={props.pop} onChange={e => props.setPop(!props.pop)}/><label for="music_pop">Pop</label></li>
                    <li><input type="checkbox" id="music_punk" checked={props.punk} onChange={e => props.setPunk(!props.punk)}/><label for="music_punk">Punk</label></li>
                    <li><input type="checkbox" id="music_rap" checked={props.rap} onChange={e => props.setRap(!props.rap)}/><label for="music_rap">Rap</label></li>
                    <li><input type="checkbox" id="music_reggae" checked={props.reggae} onChange={e => props.setReggae(!props.reggae)}/><label for="music_reggae">Reggae</label></li>
                    <li><input type="checkbox" id="music_reggaeton" checked={props.reggaeton} onChange={e => props.setReggaeton(!props.reggaeton)}/><label for="music_reggaeton">Reggaeton</label></li>
                    <li><input type="checkbox" id="music_rock" checked={props.rock} onChange={e => props.setRock(!props.rock)}/><label for="music_rock">Rock</label></li>
                    <li><input type="checkbox" id="music_rockAlt" checked={props.rockAlt} onChange={e => props.setRockAlt(!props.rockAlt)}/><label for="music_rockAlt">Rock Alternativo</label></li>
                    <li><input type="checkbox" id="music_samba" checked={props.samba} onChange={e => props.setSamba(!props.samba)}/><label for="music_samba">Samba</label></li>
                    <li><input type="checkbox" id="music_sambarock" checked={props.sambaRock} onChange={e => props.setSambaRock(!props.sambaRock)}/><label for="music_sambarock">Samba Rock</label></li>
                    <li><input type="checkbox" id="music_sertanejo" checked={props.sertanejo} onChange={e => props.setSertanejo(!props.sertanejo)}/><label for="music_sertanejo">Sertanejo</label></li>
                    <li><input type="checkbox" id="music_trap" checked={props.trap} onChange={e => props.setTrap(!props.trap)}/><label for="music_trap">Trap</label></li>                    
                </ul>
            </div>
            <span className="informacao">Escolha no máximo 5 gêneros</span>
            <div className='buttons'>
                <Button className='btn-voltar' onClick={() => props.setEtapa(1)}>Voltar </Button>
                <Button className='btn-continuar' onClick={() => props.proximaEtapa(3)}>Continuar</Button>
            </div>
        </div>
    );
}