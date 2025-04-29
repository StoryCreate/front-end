import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

const ProtectedLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default ProtectedLayout; 