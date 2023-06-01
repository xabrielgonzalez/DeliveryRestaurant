import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";  //barra superior
import { ModalProductos } from "../components/ModalProductos";
import { LeftBar } from "../components/LeftBar"; // barra lateral
import { Productos2 } from "../components/Products2";


export const Restaurante = () => {
    return (
        <div className="">
            <Navbar />
            <div className="grid flex-row flex-grow md:flex mt-20">
                <LeftBar className="w-1/4 "/>
                <div className="w-2/4 flex flex-col flex-grow">
                    <ModalProductos />
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                    <div>
                        <Productos2 />
                        <Productos2 />
                        <Productos2 />
                        <Productos2 />
                        <Productos2 />
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>

    );
};


export default Restaurante