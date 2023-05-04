import React from "react";
import {IoHome,IoExitOutline} from "react-icons/io5";
import {FaRegCreditCard,FaRegStar} from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdCardGiftcard } from "react-icons/md";

const MenuMiCuenta = () => {
    return (
        <aside className="categorias">
        <h3>MI CUENTA</h3>
        <ul>
            <li className="flex items-center gap-1 "><IoHome size={22}/>ESCRITORIO</li>
            <li className="flex items-center gap-1 "><AiOutlineShop size={22}/>MI HISTORIA</li>
            <li className="flex items-center gap-1 "><FaRegStar size={22}/>MIS FAVORITOS</li>
            <li className="flex items-center gap-1 "><FaRegCreditCard size={20}/>METODOS DE PAGO</li>
            <li className="flex items-center gap-1 "><MdCardGiftcard size={24}/>BILLETERA / CARTERA</li>
            <li className="flex items-center gap-1 "><BsFillGearFill size={22}/>DETALLES DE LA CUENTA</li>
            <li className="flex items-center gap-1 "><IoExitOutline size={22}/>SALIR</li>
        </ul>
        </aside>
    );
};

export default MenuMiCuenta