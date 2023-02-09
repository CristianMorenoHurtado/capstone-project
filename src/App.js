import './App.css';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
import { Grid, GridItem} from '@chakra-ui/react';


function App() {
  return (
      <Grid h='200px' templateRows={'repeat(9, 1fr)'} templateColumns={'repeat(12, 1fr)'} gap={8}>
          <GridItem colStart={3} colEnd={11}>
            <Header />
          </GridItem>
          <GridItem colStart={3} colEnd={11}>
            <Main />
          </GridItem>
          <GridItem colStart={3} colEnd={11}>
            <Footer />
          </GridItem>
      </Grid>
  );
}

export default App;
