import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Clasification = () => {
    return (
        <div>
            <ul className="flex gap-4  md:block">
                <li className="flex items-center font-semibold ml-2 mt-2">
                    Entradas                    
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center font-semibold ml-2 mt-2 ">
                    Pizzas 
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>                
                <li className="flex items-center font-semibold ml-2 mt-2">
                    Postres 
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center font-semibold ml-2 mt-2">
                    Hamburguesas 
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center font-semibold ml-2 mt-2">
                    Bebidas 
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center font-semibold ml-2 mt-2">
                    Pastas
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center font-semibold ml-2 mt-2 mb-2">
                    Menu vegano 
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
            </ul>
        </div>
    )
};

export default Clasification;