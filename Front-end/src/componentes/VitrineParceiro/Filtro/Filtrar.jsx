
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
            py={12}
            h='70px'
            mt='40px'
            bg='white'
            borderRadius='5px'
        >
            <Box ml='10px'>
                <Text fontWeight={'600'} >Distância:</Text>
                <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]} colorScheme={'orange'} w='80%' justifyContent={'center'} >
                    <RangeSliderTrack >
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
            </Box>

        </VStack >
    );
}
