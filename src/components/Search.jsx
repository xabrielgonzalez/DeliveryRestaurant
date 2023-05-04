import React from "react";
import { Lupa } from "../svgComponents/LupaSearch";



export const Search = () => {
    return(
        <div className="flex justify-center items-center w-5000 h-[500px] mt-[30px] bg-[url('../src/svgComponents/mainindex.png')] bg-cover">
        <div class="text-center">
            <h1 className=" text-4xl pb-3 pr-4  text-white font-black">Que tienes ganas de comer ?</h1>
            
<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
    <input type="text" id="simple-search" class="bg-gray-50 border border-solid border-3 border-red-500 text-xl text-black rounded-xl block w-full pl-10 pr-10 p-2.5" placeholder="Nombre Restaurante..." required/>
    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <Lupa/>
    </div>
</div>

</form>

        </div>
      </div>

      
    );
};
