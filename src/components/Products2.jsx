import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";

export const Productos2 = () => {
    return (
        <div className="mt-10 ml-4 w-screen  md:max-w-auto md:100vw   overflow-hidden">
            <h2 className="font-semibold text-lg uppercase mb-2 m-2">Pasta</h2>
            <div className="flex">
                <div className=" max-h-full object-cover md:items-center w-34 md:grid lg:flex">
                    <div className="md:h-full ">
                        <div className="w-full md:w-full md:flex md:justify-start lg:h-full ">
                            <img
                                src="https://babycocina.com/wp-content/uploads/2021/06/Recetas-de-pastas-italianas.jpg"
                                alt=""
                                className="h-32 w-full  md:w-full md:h-full object-cover md:max-w-[200px] lg:max-w-auto"
                            ></img>
                        </div>
                    </div>
                    <div className="items-center justify-between gap-28 ">
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

                        <p className="max-h-[150px] w-[350px] text-justify md:max-h-72 overflow-scroll md:max-w-[500px] md:w-[500px] md:h-32 lg:max-w-none lg:w-[700px] lg:pl-10 xl:w-[1024px] xl:h-[200px] lg:scrollbar-thin">
                            {" "}
                            La preparación de los ravioli requiere de una pasta
                            especial, no de una simple pasta al huevo, sino de
                            una con bastante agua y relativamente poco huevo.
                            Pese a su nombre (‘plegados’), modernamente los
                            ravioli se hacen de un modo más rápido extendiendo
                            sobre la mesa una lámina cuadrangular de la
                            mencionada pasta y disponiendo sobre la misma el
                            relleno de un modo regular; luego se cubre todo con
                            una lámina semejante a la inferior y se fracciona
                            con un elemento cortante (muchas veces una
                            ruedecilla dentada giratoria) en los cuadrados que
                            resultarán en los ravioli individuales. Una de las
                            recetas más antiguas conocidas señala como
                            ingredientes del relleno la borraja (ingrediente
                            actualmente totalmente desaconsejado por sus efectos
                            nocivos), la escarola, carne vacuna, leche cuajada,
                            pasta de salchicha, queso parmesano y huevo de
                            gallina. Actualmente, los ravioli suelen estar
                            rellenos de ricotta, una especie de requesón (muy
                            común en Italia, Argentina y Uruguay) y otros tipos
                            de queso, espinaca, ortiga, carne, riñones, sesos,
                            etcétera. Los vegetarianos han puesto de moda los
                            ravioli rellenos de tofu. Una vez preparados, los
                            ravioli se pueden guardar durante unos pocos días en
                            un refrigerador. Un tipo de salsa que los puede
                            acompañar es la elaborada sobre la base de tomate,
                            carne vacuna, romero, ajo y cebolla.
                        </p>
                    </div>
                    <div className="md:flex md:justify-start md:mt-4 lg:pl-10">
                        <span className="">$xxxx</span>
                        <MdPlayArrow />
                    </div>
                    <div className="max-widht:fit-content"></div>
                </div>
            </div>
        </div>
    );
};
