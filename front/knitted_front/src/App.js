import React from 'react';
import Authentication from './components/Auth';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Authentication />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
