import React from "react";
import { LogoNav } from "../svgComponents/LogoNav";
import { LogoLocat } from "../svgComponents/LogoLocation";
import { FlagS } from "../svgComponents/FlagSpain";
import { UserL } from "../svgComponents/UserLogo";
import { CartShop } from "../svgComponents/CartShop";
import { CashD } from "../svgComponents/CashDelivery";
import { MenuD } from "../svgComponents/MenuDesplegable";

export const Navbar = () => {
    return (
        <div className=" pt-3 flex justify-between  items-center pl-8 ">
            <div className="flex gap-1 items-center pl-9">
                <LogoNav/>
                <LogoLocat/>
                <p className="text-black font-black">Enviar a carolina-calle 1234</p>
                <MenuD/>
            </div>

            <div>
                <ul className="flex items-center gap-3  lg:pr-10 md:mr-10">
                    <li>
                        <a href="" className="flex">
                        <CashD/>
                        <p className="pt-2 text-black font-black">$</p>
                        <p className="pt-2 text-black font-black">0.00</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <CartShop/>
                        
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 ">
                            <UserL />
                            <span className="text-black font-black">Carolina</span>
                        </a>
                    </li>
                    <li><FlagS/></li>
                </ul>
            </div>
        </div>
    );
};
