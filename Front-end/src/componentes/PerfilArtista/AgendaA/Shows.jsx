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
                mainW={'240px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                p={6}
                textAlign={'center'}
                borderRadius='5px'
            >
                <Avatar
                    size={'xl'}
                    src={
                        'https://static-images.ifood.com.br/image/upload/t_high/logosgde/725cba27-3ad0-4ae4-8fef-99df987c9c67_COCOB_IANIA.png'
                    }
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}

                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Coco Bambu
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @cocobambuoficial
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
                        fontWeight={'400'}
                        fontSize={{ base: '5px', md: '10px', lg: '13px' }}>
                        Dia 22 de novembro, as 20h
                    </Badge>
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={{ base: '10px', lg: 'sm' }}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Ver Parceiro
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