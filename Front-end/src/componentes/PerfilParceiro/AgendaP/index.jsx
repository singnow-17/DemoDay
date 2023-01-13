import { Box, Center, Text } from '@chakra-ui/react';

import Slide from './Slide';

export function AgendaP() {
    return (
        <Box>
            <Center bg='#F0F1F5'>
                <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'} h='100vh'>

                    <Text fontSize={'2xl'} fontWeight={500} alignItems="center" textAlign={'center'} py='20px'>Agenda</Text>
                    <Slide />
                </Box >
            </Center >
        </Box>
    );
}