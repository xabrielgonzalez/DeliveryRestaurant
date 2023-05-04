import React from "react";
import {IoExitOutline} from "react-icons/io5";
import {FaRegCreditCard,FaRegStar} from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdCardGiftcard } from "react-icons/md";

const Escritorio = () => {
    return (
        <aside >
        <h3>MI CUENTA</h3>
        <ul className="card-list">
            <li className="card"><AiOutlineShop size={32} style={{ color: 'red' }}/><h3>MI HISTORIA</h3> </li>
            <li className="card"><FaRegStar size={32} style={{ color: 'red' }}/><h3>MIS FAVORITOS</h3> </li>
            <li className="card"><FaRegCreditCard size={30} style={{ color: 'red' }}/><h3>METODOS DE PAGO</h3></li>
            <li className="card"><MdCardGiftcard size={34} style={{ color: 'red' }}/><h3>BILLETERA / CARTERA</h3></li>
            <li className="card"><BsFillGearFill size={32} style={{ color: 'red' }}/><h3>DETALLES DE LA CUENTA</h3></li>
            <li className="card"><IoExitOutline size={32} style={{ color: 'red' }}/><h3>.........SALIR.......</h3></li>
        </ul>
        </aside>
    );
};

export default Escritorio