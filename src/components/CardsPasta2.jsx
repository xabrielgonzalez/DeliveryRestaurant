import React from "react";
import {FooDescriptionPasta2} from "../svgComponents/FooDescriptionPasta2"
import { Star } from "../svgComponents/Star";
import { FoodDireccionPasta1 } from "../svgComponents/FoodDireccionPasta1";
import { FoodPasta2 } from "../svgComponents/FoodPasta2";


export const CardsPasta2 = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="orounded-xl shadow-lg m-4 mx-28 rounded-xl" style={{ border: '2px solid red' }}>
        <FoodPasta2/>
        <div className="px-2 py-4">
          <div className="flex gap-20 items-center">
            <FooDescriptionPasta2/>
            <Star/>          </div>
         <div className=" flex gap-4">
          <FoodDireccionPasta1/>
          <p className="text-[#1D763D]"> 30-45 min</p>
         </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones.</p> 
        </div>
      </div>
    </div>
  );
};

