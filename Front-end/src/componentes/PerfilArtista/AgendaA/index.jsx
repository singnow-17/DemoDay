import { Box, Center, Text } from '@chakra-ui/react';

import Slide from './Slide';

import { MdEdit } from 'react-icons/md';

export function AgendaA() {
    return (
        <Center bg='#F0F1F5'>
            <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'} h='100vh'>
                <MdEdit
                    className='edit-agenda'
                    cursor='pointer'
                    color='orange'
                    p='30px'
                    style={{ float: 'right', mt: '100px' }}
                />
                <Text fontSize={'2xl'} fontWeight={500} alignItems="center" textAlign={'center'} py='20px'>Agenda</Text>
                <Slide />
            </Box >
        </Center >
    );
}