import {
    Text,
    Box,
    Center,
    Flex,
    Image
} from '@chakra-ui/react';

export function QrCode() {
    return (
        <Center py={{ base: '6', md: '4' }} bg='#F0F1F5'>
            <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'} >

                <Text fontSize={'2xl'} fontWeight={500} alignItems="center" textAlign={'center'} py='20px'>QR Code</Text>
                <Flex
                    minH={'90vh'}
                    align={'center'}
                    justify={'center'}
                    py={12}>
                    <Image src='/qrcode.png' />
                </Flex >
            </Box >
        </Center >

    );
}