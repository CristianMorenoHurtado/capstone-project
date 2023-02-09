import { Center, Grid, GridItem, Image, Link, Text, VStack } from "@chakra-ui/react";
import footerLogo from '../images/LittleLemonLogo.png'

const Footer = () => {
    return (
        <Center h='400px'>
            <footer>
                <Center>
                    <Grid
                        h='100%'
                        templateRows={'repeat(1, 1fr)'}
                        templateColumns={'repeat(8, 1fr)'}
                        gap={24}
                    >
                        <GridItem colSpan={2}>
                            <Link href='#'>
                                <Center>
                                    <Image h={'250px'} src={footerLogo} alt='Little Lemon Logo' />
                                </Center>
                            </Link>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Text as='p' fontSize={'18px'} fontWeight={'bold'}>Doormat Navigation</Text>
                            <ul>
                                <VStack spacing={4} align={'left'} >
                                    <li><Link fontWeight={'normal'} href='#'>Home</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>About</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Menu</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Reservations</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Order Online</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Login</Link></li>
                                </VStack>
                            </ul>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Text as='p' fontSize={'18px'} fontWeight={'bold'}>Contact</Text>
                            <ul>
                                <VStack spacing={4} align={'left'} >
                                    <li><Link fontWeight={'normal'} href='#'>Address</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Phone</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Email</Link></li>
                                </VStack>
                            </ul>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Text as='p' fontSize={'18px'} fontWeight={'bold'}>Social Media</Text>
                            <ul>
                                <VStack spacing={4} align={'left'} >
                                    <li><Link fontWeight={'normal'} href='#'>Address</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Phone</Link></li>
                                    <li><Link fontWeight={'normal'} href='#'>Email</Link></li>
                                </VStack>
                            </ul>
                        </GridItem>
                    </Grid>
                </Center>
            </footer>
        </Center>
    );
}

export default Footer;