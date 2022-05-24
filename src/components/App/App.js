import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page } from '../Page/Page';

import { Homepage } from '../pages/Homepage';
import { Productspage } from '../pages/Productspage';
import { Journalpage } from '../pages/Journalpage';
import { Aboutpage } from '../pages/Aboutpage';
import { Loginpage } from '../pages/Loginpage';
import { Notfoundpage } from '../pages/Notfoundpage';

import './App.scss';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Homepage />} />
          <Route path='products' element={<Productspage />} />
          <Route path='journal' element={<Journalpage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='*' element={Notfoundpage} />
        </Route>
      </Routes>
    </>
  );
};
