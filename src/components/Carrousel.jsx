import React from "react";
import Carousel from 'react-elastic-carousel';
import { BoulevardRose } from "../svgComponents/BoulevardRose";
import { Felicetail } from "../svgComponents/Felicetail";
import { Solar } from "../svgComponents/Solar";


export const Carrousel = () => {
  const items = [
    { id: 1, title: <BoulevardRose /> },
    { id: 2, title: <Felicetail /> },
    { id: 3, title: <Solar /> },
    { id: 4, title: <BoulevardRose /> },
    { id: 5, title: <Felicetail /> },
    { id: 6, title: <Solar /> },
    { id: 7, title: <BoulevardRose /> },
    { id: 8, title: <Felicetail /> },
    { id: 9, title: <Solar />}

  ];

  const carouselSettings = {
    itemsToShow: 3,
    disableArrowsOnEnd: true,
    pagination: false,
    arrowColor: 'red'
  };

  return (
    <Carousel {...carouselSettings}>
      {items.map(item => <div key={item.id}>{item.title}</div>
      )}
    </Carousel>
  );
};
