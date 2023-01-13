import {
    Box,
    Flex,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
    Stack,
    Image,
    Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ProfileMenu } from './ProfileMenu';
import DarkLight from './DarkLight';
import { Link } from 'react-router-dom'

export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg='white' px={{ base: '4', md: '8' }} color='black' >
            <Flex h={16} alignItems={'center'} justifyContent={{ base: 'space-between', md: 'center' }} borderBottom={{ base: '1px solid', md: 'none' }} borderColor='gray.200'>
                <Flex gap={{ lg: '14', md: '4' }} justifyContent='space-between' width='100%' alignItems='center'>
                    <Flex alignItems='center' >
                        <Image
                            borderRadius='full'
                            h='50px'
                            src='/logo.jpg'
                            alt='logo'
                            objectFit='cover'
                            display='block'
                        >
                        </Image>
                        <Heading fontSize="20px">SingNow</Heading>
                    </Flex>
                    <Flex display={{ base: 'none', md: 'flex' }}
                        gap='50px'>
                        <ChakraLink _hover={{ textDecoration: 'none', color: '#FA9201' }} fontWeight='500'><Link to='/'>Inicio</Link></ChakraLink>
                        <ChakraLink _hover={{ textDecoration: 'none', color: '#FA9201' }} fontWeight='500'><Link to='/artistas'>Artistas</Link></ChakraLink>
                        <ChakraLink _hover={{ textDecoration: 'none', color: '#FA9201' }} fontWeight='500'><Link to='/parceiros'>Parceiros</Link></ChakraLink>
                    </Flex>
                    <Flex alignItems='center' gap='10px'>
                        <ProfileMenu />
                        <DarkLight />
                    </Flex>
                </Flex>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    size='24px'
                />
            </Flex>
            {isOpen ? (
                <Box pb={4} px="0" h="100vh" display={{ md: 'none' }} >
                    <Stack as={'nav'}>
                        <ChakraLink p='20px 0 10px 0' _hover={{ textDecoration: 'none' }} borderBottom='1px solid' borderColor='gray.200'>Inicio</ChakraLink>
                        <ChakraLink py='10px' _hover={{ textDecoration: 'none' }} borderBottom='1px solid' borderColor='gray.200'>Artistas</ChakraLink>
                        <ChakraLink py='10px' _hover={{ textDecoration: 'none' }} borderBottom='1px solid' borderColor='gray.200'>Parceiros</ChakraLink>
                        <ChakraLink py='10px' _hover={{ textDecoration: ' none' }}>Perfil</ChakraLink>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}