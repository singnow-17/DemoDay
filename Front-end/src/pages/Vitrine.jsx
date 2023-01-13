import { Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Artistas } from '../components/VitrineArtista/Artistas';
import Filtrar from '../components/VitrineArtista/Filtro/Filtrar';
import Boost from '../components/VitrineArtista/Boost/Carrossel';

export default function Vitrine() {
    return (
        <>
            <Header />
            <Boost />
            <Flex flexDirection='row' bg='#F0F1F5' >

                <Filtrar />
                <Artistas />
            </Flex>
            <Footer />
        </>
    )
}