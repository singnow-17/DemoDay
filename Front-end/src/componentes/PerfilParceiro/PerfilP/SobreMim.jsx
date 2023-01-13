import {
    Box,
    Flex,
    Text,
    Stack,
    Link
} from '@chakra-ui/react';
import Redes from './Redes';

export default function SobreMim() {
    return (
        <Box
            h={'45vh'}
            w={'35vh'}
            ml={{ md: '30px', base: '0' }}
            bg='RGBA(255, 255, 255, 0.04)'
        >
            <Stack spacing={6} ml={'5px'} mt={{ base: '120px', md: '20px' }} >
                <Stack spacing={2} textAlign='left'>
                    <Text fontWeight={600} textAlign='left' alignItems={'initial'}>Sobre Mim:</Text>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        Somos a casa de show mais conhecida de São Paulo! Quer achar alguém famoso? Aqui é o lugar, trazemos somente os melhores artistas.
                    </Text>
                </Stack>
            </Stack>
            <Stack mt={{ base: '40px', md: '40px' }}>
                <Flex spacing={0} textAlign='left' display={'flex'} flexDirection='row' justifyContent={'space-between'}>
                    <Link
                        fontWeight={600} textAlign='left' alignItems={'initial'}
                        _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}
                    >Seguindo:</Link>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        0
                    </Text>
                </Flex>
            </Stack>
            <Stack mt={{ base: '40px', md: '20px' }} ml={{ base: '10px', md: '0' }}>
                <Flex spacing={0} textAlign='left' display={'flex'} flexDirection='row' justifyContent={'space-between'}>
                    <Link
                        fontWeight={600} textAlign='left' alignItems={'initial'}
                        _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}
                    >Seguidores:</Link>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        479
                    </Text>
                </Flex>
            </Stack>
            <Stack spacing={6} mt={{ base: '120px', md: '30px' }}>
                <Text fontWeight={600} >Redes Sociais:</Text>
                <Redes />
            </Stack>
        </Box >
    );
}