import React from "react";
import { MdOutlineDeliveryDining, MdPlayArrow } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
export const LeftBar = () => {
    return (
        <div className="text-center w-[300px] h-[980px] ml-2 border-red-500 rounded border-solid border-[1px]">
            <div className="w-screen h-64 md:w-full">
                <img
                    src="https://ambit.com.mx/wp-content/uploads/2016/12/5-tips-invaluables-para-comenzar-tu-propio-local-de-comida-r%C3%A1pida.jpg"
                    alt=""
                    className="object-cover w-full h-full "
                ></img>
            </div>
            <div className="relative top-[-30px] overflow-hidden w-16 h-16  md:w-20 md:h-20 rounded-full ">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/05/15/restaurant-logo-Graphics-12037753-1.jpg" alt="" className="rounded-full object-cover "></img>
            </div>
            <div class="ml-1 mr-1">
                <div className="">
                    <h2 className="font-semibold text-lg text-center mb-4 md:text-start">
                        Nombre del Local
                    </h2>
                </div>
                <div>
                    <ul className="flex gap-4 md:block  max-w-screen justify-center">
                        <li className="flex items-center m-2 text-sm md:text-lg">
                            {" "}
                            <MdOutlineDeliveryDining /> Delivery
                        </li>
                        <li className="flex items-center m-2 text-sm md:text-lg">
                            {" "}
                            <MdOutlineDeliveryDining /> Envio
                        </li>
                        <li className="flex items-center m-2 text-sm md:text-lg">
                            {" "}
                            Calificacion <MdPlayArrow />
                        </li>
                        <li className="flex items-center m-2 text-sm md:text-lg">
                            {" "}
                            <BsWhatsapp /> +xx xxxxxx
                        </li>
                    </ul>
                    <div>
                        <h3 className="font-semibold mt-4">
                            Scannea para acceder desde tu movil</h3>
                        <div className="md:border-solid md:border border-red-500 rounded-md mt-4 border-[1px] h-[200px]">                                               
                        </div>
                    </div>
                    <div className="md:border-solid md:border border-red-500 rounded-md mt-5  border-[1px]">
                        <ul className="flex gap-4  md:block  max-w-screen  ">
                            <li className="flex items-center m-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center m-2">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center m-2">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center m-2">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
