import React from "react";
import { Navbar } from "../components/Navbar";
import MenuMiCuenta from "../components/MenuMiCuenta";
import Footer from "../components/Footer"
import Escritorio from "../components/Escritorio";



// const MiCuenta = () => {
//     return(
//         <div>
//         <Navbar url ={ "https://i.postimg.cc/rpYZc5Jn/Delivery-Restaurant-removebg-preview.png"} isDefault={false} />
//         </div>
//     )
// }

// export default MiCuenta



    const MiCuenta = () => {
    return (
        <div>

            <div >
                <Navbar
                    url={"https://i.postimg.cc/rpYZc5Jn/Delivery-Restaurant-removebg-preview.png"}
                    isDefault={false}
                />
            </div>
        <div className="container">
            <div className="menu">
                <MenuMiCuenta />
            </div>            
        <div className="contenido">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima ducimus, odit quo deserunt qui dolore alias quidem reprehenderit rerum molestias error vitae incidunt facilis, impedit dolor accusantium, reiciendis cupiditate.</p> */}
            <Escritorio />
        </div>
        </div>
            <Footer />
        </div>
    );
    };

export default MiCuenta;

