import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            bg={'white'}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'} spacing={6}>
                    <Link _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}>Inicio</Link>
                    <Link _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}>Artistas</Link>
                    <Link _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}>Parceiros</Link>
                    <Link _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}>Configurações</Link>
                </Stack>
                <Text>© 2022 SingNow - Mostre seu potencial!</Text>
            </Container>
        </Box>
    );
}