import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import {HomeContextProvider } from './context';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
])

function App() {
  return (
    <HomeContextProvider>
       <RouterProvider router={router} />
    </HomeContextProvider>
  );
}


export default App;
