import React from "react";
import { Eggs } from "../svgComponents/eggs";
import { Rice } from "../svgComponents/Rice";
import { Sandwiche } from "../svgComponents/Sandwiche";
import { Dessert } from "../svgComponents/Dessert"; 
import { Vegan } from "../svgComponents/Vegan"; 
import { Pizza } from "../svgComponents/Pizza";
import { Next } from "../svgComponents/Next";


export const Listfood2 = () => {
    return (
        <div>
            <ul className="list-none flex gap-10 ml-72 pt-10">
                <li><button><Eggs/></button></li>
                <li ><button><Rice/></button></li>
                <li ><button><Sandwiche/></button></li>
                <li ><button className="pt-5"><Dessert/></button></li>
                <li ><button className="pt-5"><Vegan /></button></li> 
                <li ><button className="pt-5"><Pizza/></button></li>
                <li ><button className="pt-10"><Next /></button></li>

            </ul>
        </div>
    );
};