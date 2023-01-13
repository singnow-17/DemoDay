import { AgendaA } from '../components/PerfilArtista/AgendaA';
import ContatoA from '../components/PerfilArtista/ContatoA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PerfilA } from '../components/PerfilArtista/PerfilA';
import { Playlist } from '../components/PerfilArtista/Playlist';
import { Link } from "react-router-dom";


export default function Artistas() {
    return (
        <>
            <Header />
            <PerfilA />
            <Playlist />
            <AgendaA />
            <ContatoA />
            <Footer />
        </>
    )
}