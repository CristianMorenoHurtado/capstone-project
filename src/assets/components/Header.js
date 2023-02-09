import { Center } from '@chakra-ui/react';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <Center h='100px'>
                <Nav />
            </Center>
        </header>
    );
}

export default Header;