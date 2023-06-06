import React from "react";
import { Star } from "../svgComponents/Star";

export const Card=(promps)=>{
    return(
        <>
            
            <div className="rounded-3xl overflow-hidden p-3 border border-red-500 border-solid w-96 shadow-xl">
                <img className="w-full h-64 object-cover rounded-2xl border-2 border-solid border-gray-300 shadow-inner" src={`${promps.cover}`} alt="" />
                <div className="flex gap-30 items-center">
                    <div className="w-64 h-14 overflow-hidden flex justify-evenly items-center mt-3 px-2 py-1 border-2 border-b border-r border-solid border-gray-400 rounded-xl rounded-tl-none rounded-br-none">

                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-14 h-14 z-10 rounded-full border border-solid border-red-500"></div>
                            <img className="relative w-24 h-24 rounded-full object-cover" src={`${promps.logo}`} alt=""/>
                        </div>
                       
                        <div className="font-bold text-xl mb-2 uppercase">{promps.name}</div>
                    </div>
                    <div className="ml-10 pt-2"><Star/></div>
                </div>
                <div className="text-left my-2">Address</div>
                <div className="py-2">       
                    <p className="text-gray-700 text-base text-justify">{promps.description}</p>
                </div>
            </div>

        </>
    )
}