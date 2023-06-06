import React from "react";

export const ProductosCarrusel = () => {
    return (
        <div className=" border-red-500 border-solid border-[1px]  rounded-md h-366 w-736">
            <div className="flex justify-center">
                <img
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg"
                    alt=""
                    className="h-32 w-full  mx-auto md:bg-contain "
                />
            </div>
            <h4 className="text-lg flex justify-center text-white bg-red-500 mb-2 relative mt-[-10px] object-cover rounded-md">Pasta a la Bolognesa</h4>
            <div className="flex justify-center">
                <a 
                href="/"
                    className="bg-gray-200 border-solid border-[1px] text-red-500 px-4 py-2 rounded m-2">
                    Ver mas
                </a>
            </div>
        </div>
    );
};
export default ProductosCarrusel;
