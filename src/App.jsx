import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* 
import {Homeindex} from './pages/Homeindex'
import {HomeInicial} from './pages/HomeInicial'
import {Restaurante} from './pages/Restaurante'
import {Pasta} from './pages/Restaurante'

 */
const Register =lazy(()=> import('./components/Register'));

const Homeindex = lazy(() => import('./pages/Homeindex'));
const HomeInicial =lazy(() =>import('./pages/HomeInicial'));
const Restaurante = lazy(() => import('./pages/Restaurante'));
const Pasta = lazy(() => import('./pages/Pasta'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeInicial />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurante" element={<Restaurante />} />
          <Route path="/home" element={<Homeindex />} />
          <Route path="/pasta" element={<Pasta />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
