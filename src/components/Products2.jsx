import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { MdOutlineEco } from "react-icons/md";

export const Productos2 = () => {
  return (
    <div className="border-b border-gray-100 border-solid">
      <div className="flex container-auto">
        <div className="container md:items-center">
          <div className="md:h-full">
            <div className="w-full md:w-full md:flex md:justify-start lg:h-full">
              <img
                src="https://babycocina.com/wp-content/uploads/2021/06/Recetas-de-pastas-italianas.jpg"
                alt=""
                className="h-5/6 m-3 w-10/12 object-cover md:max-w-[200px] rounded-xl lg:max-w-auto"
              />
            </div>
          </div>
          <div>
            <div>
              <h4 className="flex font-semibold text-lg">Ravioles
              </h4>
            </div>
            <p className="text-sm w-[580px] h-[140px]  overflow-hidden justify-center">
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
          <div className="justify-between mt-3 mb-3">
            <div className="flex items-end">
              <MdOutlineEco className="w-7 h-7 flex items-center justify-center rounded-full m-1 bg-amber-600 text-white" />
              <BiBookmark className="w-7 h-7 flex items-center justify-center rounded-full m-1 bg-amber-600 text-white" />
            </div>
            <p className="text-2xl text-amber-600 pt-32">$1350</p>
          </div>
          <BiChevronRight className="text-white m-10 text-3xl bg-rose-700 rounded-full" />
        </div>
      </div>
    </div>


  );
};
export default Productos2;