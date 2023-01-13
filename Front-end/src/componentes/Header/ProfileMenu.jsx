import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ProfileMenu() {
    return (
        <Menu >
            <MenuButton
                display={{ base: 'none', md: 'flex' }}
                as={Button}
                boxShadow='inset 0 0 0 2px #FA9201'
                borderRadius='10px'
                px='30px'
                py='8px'
                bg='none'
                _hover={{
                    bg: 'none',
                    boxShadow: 'inset 0 0 0 3px #FA9201'
                }}
                _active={{
                    bg: 'none',
                }}>
                Perfil
            </MenuButton>
            <MenuList bg='white' padding='0' border='none' >
                <Link to='/artista'><MenuItem borderTopRadius={4} bg='white' _hover={{
                    bg: '#FA9201'
                }}>Perfil</MenuItem></Link>
                <MenuItem bg='white' _hover={{
                    bg: '#FA9201'
                }}>Configurações</MenuItem>
                <MenuItem bg='white' borderBottomRadius={4} _hover={{
                    bg: '#FA9201'
                }}>Sair</MenuItem>
            </MenuList>
        </Menu >
    );
}


