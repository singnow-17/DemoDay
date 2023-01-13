import { Box, Center } from '@chakra-ui/react';

import { Feed } from './Feed';
import SobreMim from './SobreMim';
import Foto from './Foto';


export function PerfilP() {
    return (
        <Box>
            <Center py={{ base: '6', md: '4' }} bg='#F0F1F5'>
                <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'} >
                    <Foto />
                    <SobreMim />
                    <Feed />
                </Box >
            </Center >
        </Box>
    );
}