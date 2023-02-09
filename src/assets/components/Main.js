import { Card, CardBody, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import restaurantFood from '../images/restauranfood.jpg';

const Main = () => {
    return (
        <Center h='20rem'>
            <main>
                <Center>
                    <Grid
                        h='100%'
                        templateRows={'repeat(1, 1fr)'}
                        templateColumns={'repeat(2, 1fr)'}
                        gap={8}
                    >
                        <GridItem colSpan={1}>
                            <Card>
                                <CardBody>
                                    <Text as='h1' color='#F4CE14'>Little Lemon</Text>
                                    <Text as='h2' color='black'>Chicago</Text>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Center>
                                <Image boxSize={'250px'} src={restaurantFood}/>
                            </Center>
                        </GridItem>
                    </Grid>
                </Center>
            </main>
        </Center>
    );
}

export default Main;