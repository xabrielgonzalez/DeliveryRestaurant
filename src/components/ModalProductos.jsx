import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@lifarl/react-scroll-snap-slider';
import { Productos } from './Productos';


export const ModalProductos = () => {

    return (
        <Slider>
            <Productos className="w-50"/>
            <Productos className="w-50"/>
            <Productos className="w-50"/>
            <Productos className="w-50"/>
        </Slider>
    );
};

