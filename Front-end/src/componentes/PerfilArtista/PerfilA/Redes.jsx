import { Wrap, HStack, IconButton } from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
export default function Redes() {
    return (

        <Wrap display='flex' justifyItems={'center'} spacing='10px' >

            <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={2}
                alignItems={{ base: 'center', md: 'flex-start' }}>
                <IconButton
                    aria-label="spotify"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'orange' }}
                    icon={<FaSpotify size="20px" />}
                />
                <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'orange' }}
                    icon={<FaInstagram size="20px" />}
                />
                <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'orange' }}
                    icon={<FaLinkedin size="20px" />}
                />
                <IconButton
                    aria-label="add"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'orange' }}
                    icon={<MdAdd size="20px" />}
                />
            </HStack>
        </Wrap>
    );
}