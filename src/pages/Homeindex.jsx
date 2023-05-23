import React from "react";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Listfood } from "../components/ListFood";
import { Listfood2 } from "../components/ListFood2";
import { LogoLocat } from "../svgComponents/LogoLocation";
import { MenuD } from "../svgComponents/MenuDesplegable";
import { Carrousel } from "../components/Carrousel";

export const Homeindex = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Search />
            </div>
            <div>
                <Listfood />
                <h2 className=" pt-36 px-20 text-[40px] text-red-600 font-bold">Restaurantes Adheridos</h2>
                <Listfood2 />
            </div>
            <h3 className="pt-36 px-20 text-[40px] text-red-600 font-bold">Restaurantes Cerca</h3>
            <div className="px-20 flex">
                <LogoLocat />
                <p className=" text-gray-400 pl-5 pr-5">Enviar a Ana-calle 1234 Av.Vnzla..</p>
                <div className="pt-2">
                    <MenuD />
                </div>

                <br />
            </div>
            <div className="px-20 pt-10  ">
                <Carrousel />
            </div>
            <div>
                <h3 className="pt-36 px-20 text-[40px] text-red-600 font-bold"> +Populares</h3>
                <br />
                <div className="px-20 pt-10">
                    <Carrousel />
                </div>
                <div className="pt-36 px-20 text-[40px] text-red-600 font-bold">
                    <h4>Cancelar compra</h4>
                    <br />
                    <div className="flex justify-center items-center">
                        <button className="border-red-600 bg-gray-300 p-4 rounded-xl buttoncancel w-96">
                            Me Arrepentí
                        </button>
                    </div>
                </div>

            </div>

            <div>
            </div>
        </div>
    );
};

export default Homeindex
