import React from 'react'
import { LogoPage } from '../svgComponents/LogoDelivery';

const ChooseRole = ({setRole}) => {
    return (
        <section className='bg-white flex flex-col justify-between h-screen'>

            <div></div>
            
            <div>

                <div className='mb-[100px] flex justify-center '>
                    <LogoPage />
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center font-["Inter"] mb-[30px] text-[30px] font-[400] uppercase'>Identifiquese</p>
                    <div className='flex justify-between gap-[50px] mb-[80px]'>
                        <button className='w-[350px] h-[80px] bg-[#D9D9D9] rounded-[20px] uppercase' onClick={() => setRole(true)}>cliente</button>
                        <button className='w-[350px] h-[80px] bg-[#D9D9D9] rounded-[20px] uppercase'>empresa / local</button>
                    </div>
                </div>
            </div>


            <p className='flex justify-center items-center mb-[20px] font-["Inter"] text-[24px]'>&copy; 2023 - Derechos Reservados</p>
        </section>
    )
}

export default ChooseRole
