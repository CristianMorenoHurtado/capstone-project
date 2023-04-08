import './App.css';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
import Reserve from './assets/components/Reserve';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faX } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faX)

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={ <Main /> } />
          <Route path='/reserve' element={ <Reserve /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
