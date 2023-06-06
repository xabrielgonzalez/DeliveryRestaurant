import React from "react";
import { MdOutlineDeliveryDining, MdPlayArrow } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Clasification from "./Classification";

const LeftBar = () => {
  return (
    <div className="text-center w-[300px] h-[1000px] ml-2 border-red-500 rounded border-solid border-[1px] right-0">
      <div className="w-screen h-64 md:w-full">
        <img
          src="https://ambit.com.mx/wp-content/uploads/2016/12/5-tips-invaluables-para-comenzar-tu-propio-local-de-comida-r%C3%A1pida.jpg"
          alt=""
          className="object-cover w-full h-full"
        ></img>
      </div>
      <div className="relative top-[-30px] overflow-hidden w-16 h-16 md:w-20 md:h-20 rounded-xl">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/05/15/restaurant-logo-Graphics-12037753-1.jpg"
          alt=""
          className="rounded-full object-cover"
        ></img>
      </div>
      <h1 className="text-2xl font-bold">Restaurante Pasta</h1>
      <div>
        <ul className="flex gap-4 md:block  max-w-screen justify-center">
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <MdPlayArrow className="text-red-500"/><MdOutlineDeliveryDining className="text-red-500 text-2xl" />
            <p>Delivery</p>
          </li>
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <div className="flex items-center justify-center space-x-2">
            <MdPlayArrow className="text-red-500"/><BsWhatsapp className="text-green-500 text-2xl" />
              <p>Whatsapp</p>
            </div>
          </li>
        </ul>
        <div>
          <h3 className="font-semibold mt-4">
            Scannea para acceder desde tu movil</h3>
          <div className="md:border-solid md:border border-red-500 rounded-md  border-[1px] ml-12 mt-5 h-[200px] w-[200px]">
            <p className="font-semibold mt-4">Aca va un qr</p>
          </div>
        </div>
        <div className="md:border-solid md:border border-red-500 rounded-md  border-[1px] ml-12 mt-5 h-[200px] w-[200px]">
          <Clasification />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

