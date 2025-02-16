import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BrowseCars from './pages/BrowseCars';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/findcars' element={<BrowseCars/>}/>
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
