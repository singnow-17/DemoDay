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
import { MdEdit } from 'react-icons/md';
import './Foto.css'

//import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Foto() {
    return (
        <Box>

            <Flex flexDirection={'column'} >

                <MdEdit
                    className='edit-capa'
                    cursor='pointer'
                    color='orange'
                    w='10px'
                />

                <Image
                    h={'50vh'}
                    w={'full'}
                    src={
                        'https://soubh.uai.com.br/media/uploaded_images/galeria/fotos/jangal-pedro-duarte2.jpg'
                    }
                    objectFit={'cover'}
                    justifyContent='center'
                    css={{
                        borderRadius: '5px 5px 0px 0px'
                    }}

                />
            </Flex>
            <Center
                h={'54px'}
                w={'full'}
                mt={2}
                bg={'#FA9201'}
                color={'#FA9201'}
                zIndex='1'
            />
            <Flex
                ml={{ md: '30px', base: '0' }}
                mt={-60}
                alignItems={{ base: 'center', md: 'flex-end' }}
                width='100%'
                flexDirection={{ base: 'column', md: 'row' }}
                px={{ base: '50px', md: '0' }}
            >
                <Flex
                    className='perfil'
                    w={{ base: '40vw', md: '30vw', lg: '20vw' }}>
                    <MdEdit
                        className='edit'
                        cursor='pointer'
                        color='orange'
                        justifyContent='flex-end'
                        h='50px'
                    />
                    <Image
                        className='foto'
                        boxShadow={'-10px 0px 13px -7px #444444, 10px 0px 13px -7px #444444, 5px 5px 15px 5px rgba(88,88,88,0)'}
                        w={{ base: '40vw', md: '30vw', lg: '17vw' }}
                        h='45vh'
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        alt={'Author'}
                        css={{
                            border: '4px solid #FA9201',
                            borderRadius: '5px 20px 5px 20px'
                        }}
                        objectFit={'cover'}
                        zIndex={'2'}
                        position='relative'
                    />
                </Flex>

                <Box
                    w='100%'
                    pr={{ base: '0', md: '70px' }}
                    alignItems={{ base: 'center', md: 'end' }}
                    display='flex' flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent={'space-between'}
                    mb='10px'
                    gap={8}>
                    <Stack spacing={0} display='flex' ml='20px'>
                        <Heading fontSize={'2xl'} fontWeight={500} >
                            Fabíola Santos
                        </Heading>
                        <Text fontWeight={400} >São Paulo, SP</Text>
                    </Stack>

                    <Button fontSize={'1xl'} fontWeight={500} _hover={{ bg: '#FA9201' }} >
                        Seguir
                    </Button>
                </Box>
            </Flex >
        </Box >
    );
}