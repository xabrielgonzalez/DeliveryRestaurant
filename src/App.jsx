import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('./components/Register'));
const Homeindex = lazy(() => import('./pages/Homeindex'));
const HomeInicial = lazy(() => import('./pages/HomeInicial'));
const Restaurante = lazy(() => import('./pages/Restaurante'));
const Pasta = lazy(() => import('./pages/Pasta'));
const Restaurants = lazy(() => import("./pages/Restaurants"));

function App() {
  return (
    <Router basename="/DeliveryRestaurant">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeInicial />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurante" element={<Restaurante />} />
          <Route path="/home" element={<Homeindex />} />
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;