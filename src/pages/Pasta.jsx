import React from "react";
import { Navbar } from "../components/Navbar";
import {CardsPasta1} from "../components/CardsPasta1"
import {CardsPasta2} from "../components/CardsPasta2"
import { Footer } from "../components/Footer";


export const Pasta1 = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-8 justify-center items-center bg-[url('../src/svgComponents/pasta.png')] bg-cover w-5000 h-[500px] mt-[30px] mb-[100px]">
        <div className="text-center">
          <h1 className="text-[40px] text-4xl pb-3 pr-4 pt-40  text-white font-bold">Pastas</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-11 justify-center px-60">
        <div className="flex justify-center pb-11">
          <CardsPasta1 />
        </div>
        <div className="flex justify-center pb-11">
          <CardsPasta2 />
        </div>
        <div className="flex justify-center pb-11">
          <CardsPasta1 />
        </div>
        <div className="flex justify-center pb-11">
          <CardsPasta1 />
        </div>
        <div className="flex justify-center pb-11">
          <CardsPasta1 />
        </div>
        <div className="flex justify-center pb-11">
          <CardsPasta1 />
        </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>


  );
};

export default Pasta1