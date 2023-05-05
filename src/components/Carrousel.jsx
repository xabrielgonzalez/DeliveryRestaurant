import React from "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";


export const Carrousel =()=>{
    return(
        <div className="carousel">
            <div>
            <Card1/>
            </div>    
            <div>
            <Card1/>
            </div> 
        </div>
    )
}

