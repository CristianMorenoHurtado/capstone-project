import { Center, HStack, Image, Link, VStack } from '@chakra-ui/react';
import navLogo from '../images/Logo1.svg'

const Nav = () => {
    return (
        <nav>
            <HStack spacing={16}>
                <Link href='#'>
                    <Center>
                        <Image src={navLogo} alt='Little Lemon Logo' />
                    </Center>
                </Link>
                <ul>
                    <HStack spacing={16} >
                        <li><Link href='#'>Home</Link></li>
                        <li><Link href='#'>About</Link></li>
                        <li><Link href='#'>Menu</Link></li>
                        <li><Link href='#'>Reservations</Link></li>
                        <li><Link href='#'>Order Online</Link></li>
                        <li><Link href='#'>Login</Link></li>
                    </HStack>
                </ul>
            </HStack>
        </nav>
    );
}

export default Nav;