import React from "react";

export const Productos = () => {
    return (
        <div className="ml-4 mt-10 md:mt-0 w-screen">
            <h2 className="font-semibold text-lg uppercase mb-2">Productos</h2>

            <div>
            <div className="text-center w-[200px] border-solid border-[1px] border-gray-500 h-72 rounded-md" >
            <div className="flex justify-center">

                <img
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg"
                    alt=""
                    className="h-32 w-30 object-cover"
                />
            </div>
                <h4 className="font-semibold m-8">Pasta a la Bolognesa</h4>
                <a href="/" className="bg-black text-white px-2 py-2 rounded-[4px] mt-2" >Informacion</a>
            </div>
            </div>
        </div>
    );
};
