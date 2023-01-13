
import { Box, Button, SimpleGrid, Center, Text, Stack, Tag, TagLabel, HStack, useColorModeValue, Image } from '@chakra-ui/react';

import { MdPlace } from 'react-icons/md';

import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <SimpleGrid
            data-aos="fade-up"
            columns={{ sm: '1', md: '2', xl: '3' }}
            spacing='20px'
            minW='300px'
            px={{ base: '5px', md: '20px' }}
            ml={{ base: '5px', md: '10px' }}
            justifyContent='center'
            bg={'white'}
            borderRadius='5px'
            my='40px'
        >
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
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        }
                        objectFit={'cover'}
                    />
                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <Text><strong>Audio</strong></Text>
                        <Stack display={'flex'} flexDirection='row' alignItems={'center'} spacing={2}>
                            <MdPlace />
                            <Text>São Paulo, SP</Text>

                        </Stack>
                        <Link to='/parceiro'><Button
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
                            }}>Ver Parceiro</Button></Link>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>


                        <Text><strong>Gustavo Goulart</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'350px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Richard</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Italo</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Victor Augusto</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Vitória Caroline</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Fabiola Santos</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>
            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Fabiola Santos</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>
            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Fabiola Santos</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Fabiola Santos</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Center py={6}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        src={
                            'https://fastly.4sqi.net/img/general/600x600/26110675_eru-GfiA4g0QfeVaRpU5LLOAVjydbjxAPHWnFC6Vldw.jpg'
                        } />

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

                        <Text><strong>Fabiola Santos</strong></Text>
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
                            }}>Ver Parceiro
                        </Button>
                    </Box>
                </Box>
            </Center>
        </SimpleGrid >
    );
}