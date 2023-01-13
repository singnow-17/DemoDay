import { AgendaP } from '../components/PerfilParceiro/AgendaP';
import ContatoP from '../components/PerfilParceiro/ContatoP';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PerfilP } from '../components/PerfilParceiro/PerfilP';



export default function Parceiro() {
    return (
        <>
            <Header />
            <PerfilP />
            <AgendaP />
            <ContatoP />
            <Footer />
        </>
    )
}