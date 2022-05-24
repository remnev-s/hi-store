import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer';
import './Page.scss';
import block1 from '../../images/block-1.jpg';

export const Page = () => {
  return (
    <>
      <Header count={0} />
      <Outlet />
      <Footer />
    </>
  );
};
