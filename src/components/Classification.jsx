import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Clasification = () => {
    return (
        <div >
            <ul className="flex gap-4  md:block">
                <li className="flex items-center ml-2 mt-2">
                    Entradas <MdPlayArrow className="text-red-500" />                    
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center ml-2 mt-2 ">
                    Pizzas <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>                
                <li className="flex items-center ml-2 mt-2">
                    Postres <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center ml-2 mt-2">
                    Hamburguesas <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center ml-2 mt-2">
                    Bebidas <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center ml-2 mt-2">
                    Pastas <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
                <li className="flex items-center ml-2 mt-2 mb-2">
                    Menu vegano <MdPlayArrow className="text-red-500" />
                </li>
                <div className=" border-gray-300 border-t border-[0.5px] border-solid"></div>
            </ul>
        </div>
    )
};

export default Clasification;