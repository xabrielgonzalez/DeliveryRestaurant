import React from "react";
import { MdOutlineDeliveryDining, MdWatchLater, MdOutlineGrade, MdOutlineCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Clasification from "./Classification";

const LeftBar = () => {
  return (
    <div className=" text-center w-[300px]  ml-2 inline-block border-gray-300 overflow-hidden bg-white rounded border-solid border-[1px] right-0">
      <div className="w-screen h-64 md:w-full">
        <img
          src="https://ambit.com.mx/wp-content/uploads/2016/12/5-tips-invaluables-para-comenzar-tu-propio-local-de-comida-r%C3%A1pida.jpg"
          alt=""
          className="object-cover w-full h-full"
        ></img>
      </div>
      <div className="flex items-center">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2021/05/15/restaurant-logo-Graphics-12037753-1.jpg"
          alt=""
          className="rounded-full md:w-20 md:h-20 object-cover"
        ></img>
        <h2 className="text-2xl font-bold ">Restaurante Pasta</h2>
      </div>
      <div className="m-5 flex items-center">
        <p className=" text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <ul className="flex gap-4 md:block  max-w-screen justify-center">
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <MdOutlineDeliveryDining className="text-rose-700" />
            <div className="flex justify-between w-full">
              <p>Tiempo de entrega</p>
              <p className="text-right font-semibold">40-60 min</p>
            </div>
          </li>
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <MdWatchLater className="text-rose-700" />
            <div className="flex justify-between w-full">
              <p>Envio</p>
              <p className="text-right font-semibold">Gratis</p>
            </div>
          </li>
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <MdOutlineGrade className="text-rose-700" />
            <div className="flex justify-between w-full">
              <p>Calificación</p>
              <p className="text-right font-semibold">4.5 Estrellas</p>
            </div>
          </li>
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <BsWhatsapp className="text-green-500" />
            <div className="flex justify-between w-full">
              <p>Contacto</p>
              <p className="text-right font-semibold">54-568-4547</p>
            </div>
          </li>
          <li className="flex items-center m-5 text-sm md:text-lg">
            {" "}
            <MdOutlineCall className="text-green-500" />
            <div className="flex justify-between w-full">
              <p>Whatsapp</p>
              <p className="text-right font-semibold">54-568-4547</p>
            </div>
          </li>
        </ul>
        <div className="md:border-solid md:border border-gray-300 rounded-md my-5 items-center inline-block border-[1px] w-[200px]">
          <Clasification />
        </div>
        <div>
          <h3 className="font-semibold mt-4">
            Scannea para acceder desde tu movil</h3>
          <div className="md:border-solid md:border border-gray-300 rounded-xl my-5 border-[1px] ml-12 mt-5 h-[200px] w-[200px]">
            <p className="font-semibold mt-4">Aca va un qr</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftBar;

