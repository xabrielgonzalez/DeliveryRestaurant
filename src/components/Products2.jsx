import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";

export const Productos2 = () => {
  return (      
    <div className="mt-5 ml-4 w-screen md:max-w-auto md:100vw overflow-hidden">
      <div className=" border-gray-300 my-4 w-full border-t border-[0.5px] border-solid"></div>
      <h2 className="font-semibold text-lg uppercase mb-2 ">Pasta</h2>
      <div className="flex">
        <div className="max-h-full object-cover md:items-center w-34 md:grid lg:flex">
          <div className="md:h-full">
            <div className="w-full md:w-full md:flex md:justify-start lg:h-full">
              <img
                src="https://babycocina.com/wp-content/uploads/2021/06/Recetas-de-pastas-italianas.jpg"
                alt=""
                className="h-32 w-full md:w-full md:h-full object-cover md:max-w-[200px] rounded-xl lg:max-w-auto"
              />
            </div>
          </div>
          <div className="items-center justify-between gap-28">
            <div className="flex items-center justify-between mt-6 lg:mt-0">
              <h4 className="font-semibold text-lg lg:pl-10">Rabioles</h4>
              <div className="g-2 flex">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <p className="max-h-[150px] w-[330px] text-justify md:max-h-72 overflow-auto md:max-w-[500px] md:w-[500px] md:h-32 lg:max-w-none lg:w-[700px] lg:pl-10 xl:w-[650px] xl:h-[180px]">
              La preparación de los ravioli requiere de una pasta especial, no
              de una simple pasta al huevo, sino de una con bastante agua y
              relativamente poco huevo. Pese a su nombre ('plegados'),
              modernamente los ravioli se hacen de un modo más rápido extendiendo
              sobre la mesa una lámina cuadrangular de la mencionada pasta y
              disponiendo sobre la misma el relleno de un modo regular; luego se
              cubre todo con una lámina semejante a la inferior y se fracciona
              con un elemento cortante (muchas veces una ruedecilla dentada
              giratoria).
            </p>
          </div>
          <div className="md:flex md:justify-start md:mt-4 lg:pl-10">
            <span className="">$1234</span>
            <MdPlayArrow  className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
     
  );
};
export default Productos2