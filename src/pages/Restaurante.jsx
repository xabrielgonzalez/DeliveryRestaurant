import React from "react";
import { Footer } from "../components/Footer"; // Pie de pagina
import { Navbar } from "../components/Navbar"; // Barra superior
import Carrousel from "../components/Carrusel"; // carrusel de platos a mostrar
import LeftBar from "../components/LeftBar"; // Barra lateral
import Productos2 from "../components/Products2"; // Componente de productos


const Restaurante = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="grid grid-cols-12 ">
          <div className="col-span-3">
            <LeftBar />
          </div>
          <div className="mt-10  col-span-9 mr-5">
            <h2 className="text-2xl font-semibold mb-8">Selección del dia</h2>
            <Carrousel />
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-8">Los mas pedidos</h2>
              <Carrousel />
            </div>
            <div>
              <h1 className="text-2xl mt-10 font-semibold mb-8">Nuestras Pastas</h1>
              <Productos2 />
              <Productos2 />
              <Productos2 />
              <Productos2 />
            </div>
            <div>
              <h1 className="text-2xl mt-10 font-semibold mb-8">Nuestros Postres </h1>
              <Productos2 />
              <Productos2 />
              <Productos2 />
              <Productos2 />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurante;