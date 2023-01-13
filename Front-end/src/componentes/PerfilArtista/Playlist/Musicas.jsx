import { Button, Flex, Text } from '@chakra-ui/react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'

import './Musicas.css'

import { MdEdit } from 'react-icons/md';

export default function Musicas() {
    return (
        <Flex
            h="100vh"
            justifyContent="space-around"
            alignItems="center"
            display={'flex'}
            flexDirection='column'

        >
            <Flex flexDirection={'column'} className='musicas'>
                <MdEdit
                    className='edit-musicas'
                    cursor='pointer'
                    color='orange'
                />
                <Text fontSize={'2xl'} fontWeight={500}>Minha Playlist</Text>
            </Flex>
            <Button
                px={8}
                w='70%'
                h='80px'
                bg={'white'}
                color={'black'}
                rounded={'md'}
                css={{
                    border: '4px solid #FA9201',
                    borderRadius: '20px'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
                justifyContent='flex-start'
            >
                <BsPlayCircle size="25px" /> <Text ml={{ base: '5px', md: '50px' }}>Verdade</Text>
            </Button>
            <Button
                px={8}
                w='70%'
                h='80px'
                bg={'#FA9201'}
                color={'white'}
                rounded={'md'}
                justifyContent='flex-start'
                css={{
                    border: '4px solid #FA9201',
                    borderRadius: '25px'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

            >
                <BsPauseCircle size="25px" /><Text ml={{ base: '5px', md: '50px' }}>Se Eu Largar o Freio</Text>
            </Button>
            <Button
                px={8}
                w='70%'
                h='80px'
                bg={'white'}
                color={'black'}
                rounded={'md'}
                justifyContent='flex-start'
                css={{
                    border: '4px solid #FA9201',
                    borderRadius: '20px'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
            >
                <BsPlayCircle size="25px" /><Text ml={{ base: '5px', md: '50px' }}>A de Chuva no Mar</Text>
            </Button>
            <Button
                px={8}
                w='70%'
                h='80px'
                bg={'white'}
                color={'black'}
                rounded={'md'}
                justifyContent='flex-start'
                css={{
                    border: '4px solid #FA9201',
                    borderRadius: '20px'
                }}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}
            >
                <BsPlayCircle size="25px" /> <Text ml={{ base: '5px', md: '50px' }}>Meu Lugar</Text>
            </Button>
        </Flex>
    );
}