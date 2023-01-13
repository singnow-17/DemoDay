
import { Box, Button, SimpleGrid, Center, Text, Stack, Tag, TagLabel, HStack, useColorModeValue, Image } from '@chakra-ui/react';

import { MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function Cards() {
    return (
        <SimpleGrid
            data-aos="fade-up"
            columns={{ sm: '1', md: '2', xl: '3' }}
            spacing='20px'
            w='1200px'
            minH='600px'
            px={{ base: '5px', md: '20px' }}
            mx={{ base: '5px', md: '10px' }}
            justifyContent='center'
            bg={'white'}
            borderRadius='5px'
            my='40px'
        >
            <Center py={6}>
                <Box
                    maxW={'350px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>
                        <Link to='/artista'><Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista</Button></Link>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://www.tenda.com/eudouconta/wp-content/uploads/2021/09/Pessoa-fisica-mobile.jpg'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>
            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>
            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={'whitesmoke'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'200px'}
                        w={'full'}
                        src={
                            'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <HStack spacing={4}>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'
                            >
                                <TagLabel>Eletrônica</TagLabel>
                            </Tag>
                        </HStack>
                        <Text><strong>Filipe</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'orange.400'}
                            color={'white'}
                            rounded={'xl'}
                            _hover={{
                                bg: 'orange.500',
                            }}
                            _focus={{
                                bg: 'orange.500',
                            }}>Ver Artista
                        </Button>
                    </Box>
                </Box>
            </Center>


        </SimpleGrid >
    );
}