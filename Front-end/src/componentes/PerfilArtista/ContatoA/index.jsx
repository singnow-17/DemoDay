import {
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Center
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsDiscord, BsPerson, BsTelegram } from 'react-icons/bs';

import { FaWhatsapp } from 'react-icons/fa';

export default function ContatoA() {
    return (

        <Center py={{ base: '6', md: '4' }} bg='#F0F1F5'>
            <Box maxW={'80%'} w={'full'} bg='white' rounded={'md'} overflow={'hidden'} h='100vh'>
                <Box
                    color="black"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contatos:</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Preencha o formulário para entrar em contato
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid #FA9201' }}
                                                leftIcon={<MdPhone color="orange" size="20px" />}>
                                                11 91111-1111
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid #FA9201' }}
                                                leftIcon={<MdEmail color="orange" size="20px" />}>
                                                fah122@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid #FA9201' }}
                                                leftIcon={<MdLocationOn color="orange" size="20px" />}>
                                                São Paulo, SP
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="whatsapp"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: 'orange' }}
                                            icon={<FaWhatsapp size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="telegram"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: 'orange' }}
                                            icon={<BsTelegram size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: 'orange' }}
                                            icon={<BsDiscord size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg" boxShadow={'2xl'}>
                                    <Box m={8} color="#0B0E3F" >
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Seu Nome</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>E-mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Mensagem</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="digite aqui..."
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    variant="solid"
                                                    bg="#FA9201"
                                                    color="white"
                                                    _hover={{}}>
                                                    Enviar
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Box >
        </Center >
    );
}