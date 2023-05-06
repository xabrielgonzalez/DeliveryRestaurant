import React from "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { ButtonCarouselR } from "../svgComponents/ButtonCarouselR";
import { ButtomCarouselL } from "../svgComponents/ButtomCarouselL";


export const Carrousel =()=>{

    const scrollL =()=>{
        document.getElementById("content").scrollL += 800;
    }

    const scrollR =()=>{
        document.getElementById("content").scrollL += 800;
    }


    return(
        <div className="relative">
            <div className="absolute left-0 top-20">
                <button onClick={scrollL} className="p-10"><ButtomCarouselL/></button>
            </div>
            <div className="absolute right-0 top-20">
                <button onClick={scrollR} className="p-4"><ButtonCarouselR/></button>
            </div>
            <div className="flex gap-20 w-max" id="content">
                <div>
                    <Card1/>
                </div>    
                <div>
                    <Card2/>
                </div> 
                <div>
                    <Card3/>
                </div> 
                <div>
                    <Card1/>
                </div> 
                <div>
                    <Card2/>
                </div>
                <div>
                    <Card3/>
                </div> 
                <div>
                    <Card1/>
                </div>
                <div>
                    <Card3/>
                </div>   
            </div>
        </div>
    )
}
