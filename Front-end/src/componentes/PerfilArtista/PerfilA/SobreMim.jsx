import {
    Box,
    Flex,
    Text,
    Stack,
    Link
} from '@chakra-ui/react';
import Redes from './Redes';
import { MdEdit } from 'react-icons/md';
import './SobreMim.css'

export default function SobreMim() {
    return (
        <Box
            h={'45vh'}
            w={{ base: '100%', md: '17vw' }}
            ml={{ md: '30px', base: '0' }}
            bg='RGBA(255, 255, 255, 0.04)'
            display={{ base: 'flex', md: 'block' }}
            flexDirection={{ base: 'column' }}
            alignItems={'center'}
        >
            <Stack spacing={6} ml={'5px'} mt={{ base: '0px', md: '20px' }} w={{ base: '40vw', md: '17vw' }}>
                <Stack spacing={2} textAlign={{ base: 'center', md: 'left' }}>
                    <MdEdit
                        className='edit-sobremim'
                        cursor='pointer'
                        color='orange'
                        w='10px'
                        style={{ float: 'right', mt: '100px' }}
                    />
                    <Text fontWeight={600} alignItems={'initial'}>Sobre Mim:</Text>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        Sou uma amante da música e sempre tento me rodear de energia positiva, toco samba e pagode a mais de 3 anos e estou procurando novas oportunidades!
                    </Text>
                </Stack>
            </Stack>
            <Stack mt={{ base: '40px', md: '40px' }}>
                <Flex spacing={0} textAlign='left' display={'flex'} flexDirection='row' justifyContent={'space-between'} w={{ base: '30vw', md: '17vw' }}>
                    <Link
                        fontWeight={600} textAlign='left' alignItems={'initial'}
                        _hover={{ textDecoration: 'underline', color: '#FA9201' }} href={'#'}
                    >Seguindo:</Link>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        0
                    </Text>
                </Flex>
            </Stack>
            <Stack mt={{ base: '40px', md: '17px' }}>
                <Flex spacing={0} textAlign='left' display={'flex'} flexDirection='row' justifyContent={'space-between'} w={{ base: '30vw', md: '17vw' }}>
                    <Link
                        fontWeight={600}
                        textAlign='left'
                        alignItems={'initial'}
                        _hover={{ textDecoration: 'underline', color: '#FA9201' }}
                        href={'#'}
                    >Seguidores:</Link>
                    <Text fontSize={'sm'} fontWeight={400} alignItems='center' justifyContent={'center'}>
                        0
                    </Text>
                </Flex>
            </Stack>
            <Stack spacing={6} mt={{ base: '20px', md: '30px' }}>
                <Text fontWeight={600} textAlign={{ base: 'center', md: 'left' }}>Redes Sociais:</Text>
                <Redes />
            </Stack>
        </Box >
    );
}