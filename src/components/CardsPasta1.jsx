import React from "react";
import { FoodPasta1 } from "../svgComponents/FoodPasta1";
import { FooDescriptionPasta1 } from "../svgComponents/FooDescriptionPasta1";
import { Star } from "../svgComponents/Star";
import { FoodDireccionPasta1 } from "../svgComponents/FoodDireccionPasta1";

export const CardsPasta1 = () => {
  return (
    <div className="rounded-xl shadow-lg m-4 mx-28" style={{ border: '2px solid red' }}>
      <FoodPasta1 />
      <div className="px-2 py-4">
        <div className="flex gap-20 items-center">
          <FooDescriptionPasta1 />
          <button>
            <Star />
          </button>
        </div>
        <div className="flex gap-4">
          <FoodDireccionPasta1 />
          <p className="text-[#1D763D]"> 30-45 min</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones.
        </p>
      </div>
    </div>
  );
};
