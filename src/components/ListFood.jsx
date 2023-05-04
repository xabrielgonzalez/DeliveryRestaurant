import React from "react";
import { Pasta } from "../svgComponents/Pasta";
import { Meat } from "../svgComponents/Meat";
import { Crab } from "../svgComponents/Crab";
import { Dessert } from "../svgComponents/Dessert"; 
import { Vegan } from "../svgComponents/Vegan"; 
import { Pizza } from "../svgComponents/Pizza";
import { Next } from "../svgComponents/Next";


export const Listfood = () => {
    return (
        <div>
            <ul className="list-none flex gap-10 ml-72 pt-20 pb-10">
                <li className="hover:scale-110 overflow-hidden ml-2"><button><Pasta /></button></li>
                <li className="hover:scale-110 overflow-hidden"><button><Meat /></button></li>
                <li className="hover:scale-110 overflow-hidden"><button><Crab /></button></li>
                <li className="hover:scale-110 overflow-hidden"><button><Dessert/></button></li>
                <li className="hover:scale-110 overflow-hidden"><button><Vegan /></button></li> 
                <li className="hover:scale-110 overflow-hidden"><button><Pizza/></button></li>
                <li className="hover:scale-110 overflow-hidden"><button className="pt-5"><Next /></button></li>

            </ul>
        </div>
    );
};