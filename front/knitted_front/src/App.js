import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Auth';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Register from './components/Register';
import Shop from './components/Shop';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Box } from '@mui/material';

function App() {
  return (
      <Box sx={{ minHeight: '100vh', backgroundImage: 'url(./icons8-clew-64.png)', backgroundColor: '#c5e1f9', backgroundAttachment: 'fixed', backgroundRepeat: 'repeat', backgroundSize: '50% 50%' }}>
      <ToastContainer></ToastContainer>
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
