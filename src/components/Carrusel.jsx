import React from "react";
import Carousel from '@itseasy21/react-elastic-carousel';
import { ProductosCarrusel } from "../components/Productos";


export const Carrousel = () => {
  const items = [
    { id: 1, title: <ProductosCarrusel /> },
    { id: 2, title: <ProductosCarrusel /> },
    { id: 3, title: <ProductosCarrusel /> },
    { id: 4, title: <ProductosCarrusel /> },
    { id: 5, title: <ProductosCarrusel /> },
    { id: 6, title: <ProductosCarrusel /> },
    { id: 7, title: <ProductosCarrusel /> },
    { id: 8, title: <ProductosCarrusel /> },
    { id: 9, title: <ProductosCarrusel />}

  ];

  const carouselSettings = {    
    itemsToShow: 3,
    pagination: false,
    arrowColor: 'red',
    isInfinite: true,
    itemPadding: [0, 25] 
  };

  return (
    <Carousel className="gap-4" {...carouselSettings}>
      {items.map(item => <div key={item.id}>{item.title}</div>
      )}
    </Carousel>
  );
};
export default Carrousel;

 