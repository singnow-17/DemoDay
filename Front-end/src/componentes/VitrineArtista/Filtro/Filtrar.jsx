
import {
    Box,
    VStack, StackDivider,
    RangeSliderTrack,
    RangeSlider,
    RangeSliderThumb,
    RangeSliderFilledTrack,
    Stack, Text,
    Checkbox,
} from '@chakra-ui/react';

import React from 'react';

export default function Filtrar() {

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            minW={'300px'}
            py={10}
            my='40px'
            bg='white'
            borderRadius='5px'
        >
            <Box h='40px' ml='10px'>
                <Text fontWeight={'600'} >Distância:</Text>
                <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]} colorScheme={'orange'} w='80%' justifyContent={'center'} >
                    <RangeSliderTrack >
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
            </Box>
            <Box display={'flex'} flexDirection='column' ml='10px'>
                <Text fontWeight={'600'} > Gêneros Musicais:</Text>

                <Stack spacing={[1, 2]} direction={['column']} >
                    <Checkbox colorScheme={'orange'}>Axé</Checkbox>
                    <Checkbox colorScheme={'orange'}>Black Music</Checkbox>
                    <Checkbox colorScheme={'orange'}>Blues</Checkbox>
                    <Checkbox colorScheme={'orange'}>Bossa Nova</Checkbox>
                    <Checkbox colorScheme={'orange'}>Country</Checkbox>
                    <Checkbox colorScheme={'orange'}>Eletrônica</Checkbox>
                    <Checkbox colorScheme={'orange'}>Forró</Checkbox>
                    <Checkbox colorScheme={'orange'}>Funk</Checkbox>
                    <Checkbox colorScheme={'orange'}>Gospel</Checkbox>
                    <Checkbox colorScheme={'orange'}>Hip Hop</Checkbox>
                    <Checkbox colorScheme={'orange'}>Heavy Metal</Checkbox>
                    <Checkbox colorScheme={'orange'}>Jazz</Checkbox>
                    <Checkbox colorScheme={'orange'}>Mambo</Checkbox>
                    <Checkbox colorScheme={'orange'}>Música Ambiente</Checkbox>
                    <Checkbox colorScheme={'orange'}>Música Clássica</Checkbox>
                    <Checkbox colorScheme={'orange'}>MPB</Checkbox>
                    <Checkbox colorScheme={'orange'}>Pagode</Checkbox>
                    <Checkbox colorScheme={'orange'}>Pop</Checkbox>
                    <Checkbox colorScheme={'orange'}>Punk</Checkbox>
                    <Checkbox colorScheme={'orange'}>Reggaeton</Checkbox>
                    <Checkbox colorScheme={'orange'}>Rap</Checkbox>
                    <Checkbox colorScheme={'orange'}>reggae</Checkbox>
                    <Checkbox colorScheme={'orange'}>Rock </Checkbox>
                    <Checkbox colorScheme={'orange'}>Rock Alternativo</Checkbox>
                    <Checkbox colorScheme={'orange'}>Samba</Checkbox>
                    <Checkbox colorScheme={'orange'}>Samba Rock </Checkbox>
                    <Checkbox colorScheme={'orange'}>Sertanejo </Checkbox>
                    <Checkbox colorScheme={'orange'}>Trap </Checkbox>
                </Stack>
            </Box>

            <Box display={'flex'} flexDirection='column' ml='10px'>
                <Text fontWeight={'600'}>Número de Integrantes:</Text>
                <Stack spacing={[1, 2]} direction={['column']}>
                    <Checkbox colorScheme={'orange'}>1</Checkbox>
                    <Checkbox colorScheme={'orange'}>2</Checkbox>
                    <Checkbox colorScheme={'orange'}>3</Checkbox>
                    <Checkbox colorScheme={'orange'}>4</Checkbox>
                    <Checkbox colorScheme={'orange'}>5</Checkbox>
                    <Checkbox colorScheme={'orange'}>6+</Checkbox>
                </Stack>
            </Box>
        </VStack >
    );
}
