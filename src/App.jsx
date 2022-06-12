import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Add_data from './add_data';
import './App.css';
import DisplayData from './DisplayData';
import Crud from './components/index'
import { Routes,Route, useRoutes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Update from './components/Update';

function App() {


  return (
    <div className='App'>
      <ToastContainer style={{width:'300px', marginLeft:'auto', marginRight:'auto'}} />
      <Routes>
        <Route path='/' element={<Crud />} exact />
        <Route path='/update/:id' element={<Update />} exact />
      </Routes>
    </div>
  );
}

export default App;
