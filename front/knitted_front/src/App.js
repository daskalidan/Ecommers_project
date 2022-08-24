import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Auth';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Register from './components/Register';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Authentication />
      <Routes>
        <Route path='/' element={<MainSection></MainSection>}>
          <Route path='/' element={<Shop></Shop>} />
          <Route path='/register' element={<Register></Register>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
