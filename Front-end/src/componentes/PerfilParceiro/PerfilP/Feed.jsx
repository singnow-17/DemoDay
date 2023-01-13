import {
    Image,
    Flex,
    SimpleGrid
} from '@chakra-ui/react';

export function Feed() {
    return (
        <Flex display={'flex'} flexDirection='row-reverse' justifyContent={'space-between'} mt='-300' mr={'50px'} >
            <SimpleGrid columns={{ sm: '2', md: '3' }} spacing='2px' h='600px' w={'700px'} mb='50px'>
                <Image h='200px' cursor={'pointer'}
                    src='https://audiosp.com.br/upload/galeria/523/audio-sioux66-e-shaman-9-2-20_foto_leandro-godoi-3_49526535402_o.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://audiosp.com.br/images/faca_seu_evento/stage_05.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://audiosp.com.br/images/bg_eventos.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://spacevents.com.br/App_Uploads/Public/fotos-plantas/100053_20180823165514533.jpeg' />
                <Image h='200px' cursor={'pointer'}
                    src='https://audiosp.com.br/images/faca_seu_evento/pavilion_01.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://agencia1a1.com.br/wp-content/uploads/2017/06/sepultura-na-audio-club.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://roquereverso.files.wordpress.com/2014/09/ira2.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://audiosp.com.br/images/faca_seu_evento/club_04.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://audiosp.com.br/images/faca_seu_evento/garden_03.jpg' />
            </SimpleGrid>
        </Flex>

    );
}