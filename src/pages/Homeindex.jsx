import React from "react";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Listfood } from "../components/ListFood";
import { Listfood2 } from "../components/ListFood2";




export const Homeindex = () => {
    return (
        <div>
            <Navbar />
            <div>
            <Search/>
            </div>
            <div>
            <Listfood/>
            <h2 className=" pt-36 px-20 text-[40px] text-red-600 font-bold">Restaurantes Adheridos</h2>
                <Listfood2/>
            </div>
            <div>
                
            </div>
        </div> 
    );
};

export default Homeindex
