import { Box, Center } from '@chakra-ui/react';
import Musicas from './Musicas';


export function Playlist() {
    return (
        <Center py={{ base: '6', md: '4' }} bg='#F0F1F5'>
            <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'}>
                <Musicas />
            </Box >
        </Center >

    );
}