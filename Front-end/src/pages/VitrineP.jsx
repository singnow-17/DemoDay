import Footer from '../components/Footer';
import Header from '../components/Header';
import { Flex } from '@chakra-ui/react';
import { Parceiros } from '../components/VitrineParceiro/Parceiros';
import { Filtro } from '../components/VitrineParceiro/Filtro';


export default function VitrineP() {
    return (
        <>
            <Header />
            <Flex flexDirection='row' bg='#F0F1F5' >
                <Filtro />
                <Parceiros />
            </Flex>
            <Footer />
        </>
    )
}