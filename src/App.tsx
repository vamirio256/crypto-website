import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Login from './pages/login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className='font-DMSans dark:bg-_dark_bg'>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
