import React from "react";
import { MdOutlineDeliveryDining, MdPlayArrow } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
export const LeftBar = () => {
    return (
        <div className="md:h-screen lg:4/5">
            <div className="md:w-60 md:h-full ">
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
                <div className="">
                    <h2 className="font-semibold text-lg text-center mb-4 md:text-start">
                        Nombre del Local
                    </h2>
                </div>
                <div className="">
                    <ul className="flex gap-4 md:block overflow-scroll max-w-screen justify-center">
                        <li className="flex items-center mt-2 text-sm md:text-lg ml-8 md:ml-0">
                            {" "}
                            <MdOutlineDeliveryDining /> Delivery
                        </li>
                        <li className="flex items-center mt-2 text-sm md:text-lg">
                            {" "}
                            <MdOutlineDeliveryDining /> Envio
                        </li>
                        <li className="flex items-center mt-2 text-sm md:text-lg">
                            {" "}
                            Calificacion <MdPlayArrow />
                        </li>
                        <li className="flex items-center mt-2 text-sm md:text-lg">
                            {" "}
                            <BsWhatsapp /> +xx xxxxxx
                        </li>
                    </ul>

                    <div className="md:border-solid md:border md:border-gray-500 max-h-52 lg:w-full scrollbar-thin scrollbar-track-gray-300 scrollbar-rounded-full scrollbar-track-rounded-full lg:mt-10">
                        <ul className="flex gap-4  md:block  max-w-screen  scrollbar-thin  lg:w-full">
                            <li className="flex items-center m-2  ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
                                {" "}
                                Calificacion <MdPlayArrow />
                            </li>
                            <li className="flex items-center mt-2 ">
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
