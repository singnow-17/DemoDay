import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Shows() {
    return (
        <Center py={8} >
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                p={6}
                textAlign={'center'}
                borderRadius={'5px'}
            >
                <Avatar
                    size={'xl'}
                    src={
                        'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=200'
                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}

                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Fabíola Santos
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @fah_santos
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    São Paulo, SP
                    <Link href={'#'} color={'blue.400'}>

                    </Link>{' '}

                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        Dia 22 de novembro, as 20h
                    </Badge>
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Ver Artista
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'orange.400'}
                        color={'white'}
                        _hover={{
                            bg: 'orange.500',
                        }}
                        _focus={{
                            bg: 'orange.500',
                        }}>
                        Reservar
                    </Button>
                </Stack>
            </Box>
        </Center>


    );
}