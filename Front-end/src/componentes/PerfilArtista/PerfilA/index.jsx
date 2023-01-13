import { Box, Center, Flex } from '@chakra-ui/react';

import { Feed } from './Feed';
import SobreMim from './SobreMim';
import Foto from './Foto';


export function PerfilA() {
    return (

        <Center py={{ base: '6', md: '4' }} bg='#F0F1F5'>
            <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} >
                <Foto />
                <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-between' gap={{ base: '10px', md: '20px' }}>
                    <SobreMim />
                    <Feed />
                </Flex>
            </Box >
        </Center >
    );
}