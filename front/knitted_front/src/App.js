import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Auth';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Register from './components/Register';
import Shop from './components/Shop';

import { Box } from '@mui/material';

function App() {
  return (
      <Box sx={{ backgroundColor: '#8b8b8b' }}>
      <Header />
      <Authentication />
      <Routes>
        <Route path='/' element={<MainSection></MainSection>}>
          <Route path='/' element={<Shop></Shop>} />
          <Route path='/register' element={<Register></Register>} />
          <Route path='/cart' element={<Cart></Cart>} />
        </Route>
      </Routes>
      <Footer />
      </Box>
  );
}

export default App;
