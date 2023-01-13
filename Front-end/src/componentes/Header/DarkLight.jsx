import { Button, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function DarkLight() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button
            display={{ base: 'none', md: 'flex' }}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: 'blue' }}
            w="fit-content">
            {colorMode === 'light' ? <BsMoonStarsFill bg='gray' /> : <BsSun bg='gray' />}
        </Button>
    );
}