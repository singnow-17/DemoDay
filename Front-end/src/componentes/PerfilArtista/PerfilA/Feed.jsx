import {
    Image,
    Flex,
    SimpleGrid
} from '@chakra-ui/react';

export function Feed() {
    return (
        <Flex
            mt={{ base: '15px', md: '30px' }}
            mb={{ base: '2px', lg: '20px' }}
            mr={{ base: '0', md: '100px' }}
        >
            <SimpleGrid columns={{ sm: '2', md: '2', xl: '3' }} spacing='2px' h='' maxW='600px' minW='300px' mx={{ base: '5px', md: '20px' }}>
                <Image h='200px' cursor={'pointer'}
                    src='https://cdn6.campograndenews.com.br/uploads/noticias/2022/08/26/ef6417338a7e1c2137dce6ba50d94cf631d5d67f.jpeg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://img.estadao.com.br/thumbs/640/resources/jpg/4/5/1651175379054.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://oimparcial.com.br/app/uploads/2022/04/Sao-Joao-1.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://i.ytimg.com/vi/iJyUPwltMQY/maxresdefault.jpg' />
                <Image h='200px' cursor={'pointer'}
                    src='https://f.i.uol.com.br/fotografia/2022/02/02/164383160261fae13257119_1643831602_3x2_md.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://f.i.uol.com.br/fotografia/2021/08/27/1630090749612935fd59c30_1630090749_3x2_md.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://vejario.abril.com.br/wp-content/uploads/2018/01/felipe-fittipadi5.jpg?quality=70&strip=info&w=1024&resize=1200,800' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://media.gazetadopovo.com.br/2017/03/5465ec2afcd64c6f06ecf7e4736762a7-gpLarge.jpg' />
                <Image h='200px' w='' cursor={'pointer'}
                    src='https://s2.glbimg.com/nrzKGoL7Z_OjNXJr89HD22Yoyqo=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/V/6/CK19nUQL60fcLQBFmHyA/juremeiros-24.jpg' />
            </SimpleGrid>
        </Flex>

    );
}