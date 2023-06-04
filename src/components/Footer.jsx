import React from 'react';
import { BsCreditCard, BsPaypal } from 'react-icons/bs';
import { GrAtm } from 'react-icons/gr';


const Footer = () => {
    return (
        <footer>
            <div className='flex justify-center items-center mt-[20px]'>
                <img
                    src="https://i.postimg.cc/rpYZc5Jn/Delivery-Restaurant-removebg-preview.png"
                    width={150}
                    height={75}
                />
            </div>
            <p><b>MEDIOS DE PAGO</b></p>
            <div className='footer'>
                <ul >
                    <li>
                        <a href="">
                            <BsCreditCard />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <BsPaypal />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <GrAtm size={17} />
                        </a>
                    </li>
                </ul>

            </div>
        </footer>
    );
};

export { Footer };