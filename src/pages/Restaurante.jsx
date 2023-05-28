import React from "react";
import { Navbar } from "../components/Navbar";  //barra superior
import { Productos } from "../components/Productos";
import { LeftBar } from "../components/LeftBar"; // barra lateral
import { Productos2 } from "../components/Products2";


export const Restaurante = () => {
    return (
        <div className="">

        <Navbar />
        <div className="flex flex-row container mt-10">
        <div className="grid flex-row flex-grow md:flex">
            <LeftBar className="w-1/4"/>
            <div className="flex flex-col flex-grow overflow-hidden">
                <Productos />
                <Productos2 />
                <Productos2 />
                <Productos2 />
                <Productos2 />
                <Productos2 />
            </div>
        </div>
        </div>
    </div>
    
    );
};


export default Restaurante