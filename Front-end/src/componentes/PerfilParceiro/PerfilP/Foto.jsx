import {
    Box,
    Center,
    Image,
    Flex,
    Stack,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';

//import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Foto() {
    return (
        <Box>
            <Image
                h={'50vh'}
                w={'full'}
                src={
                    'https://audiosp.com.br/upload/galeria/523/audio-sioux66-e-shaman-9-2-20_foto_leandro-godoi-3_49526535402_o.jpg'
                }
                objectFit={'cover'}
                cursor={'pointer'}
                justifyContent={{ md: 'center', base: 'center' }}
            />
            <Center
                h={'54px'}
                w={'full'}
                mt={2}
                bg={'#FA9201'}
                color={'#FA9201'}
                zIndex='1'
            ></Center>
            <Flex
                ml={{ md: '30px', base: '0' }}
                mt={-60}
                h={'45vh'}
                width='100%'
            >
                <Image
                    boxShadow={'-10px 0px 13px -7px #444444, 10px 0px 13px -7px #444444, 5px 5px 15px 5px rgba(88,88,88,0)'}
                    w={'35vh'}
                    src={
                        'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                    }
                    alt={'Author'}
                    cursor='pointer'
                    css={{
                        border: '4px solid #FA9201',
                        borderRadius: '5px 20px 5px 20px'
                    }}
                    objectFit={'cover'}
                    zIndex={'2'}
                />

                <Box w='100%' alignItems={'end'} display='flex' justifyContent={'space-between'} mb='10px'>
                    <Stack spacing={0} display='flex' ml='20px'>
                        <Heading fontSize={'2xl'} fontWeight={500} >
                            Audio
                        </Heading>
                        <Text fontWeight={400} >São Paulo, SP</Text>
                    </Stack>
                    <Button fontSize={'1xl'} fontWeight={500} _hover={{ bg: '#FA9201' }} mr='70px'>
                        Seguir
                    </Button>
                </Box>
            </Flex>
        </Box >
    );
}