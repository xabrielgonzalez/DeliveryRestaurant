import React from 'react'
import { LogoPage } from '../svgComponents/LogoDelivery';
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className='bg-white flex flex-col justify-between h-screen '>

                <div></div>
                <div >

                    <div className='mb-[80px] flex justify-center '>
                        <LogoPage />
                    </div>

                    <form className='flex flex-col w-[600px] h-auto justify-center'>

                        <div className='h-[40px] w-full border-[1px] border-[#e1e1e1] border-solid'>
                            <input type='email' placeholder='E-Mail'
                                className='w-full h-full px-[15px] text-[24px] border-none bg-inherit focus:outline-none' />
                        </div>
                        <div className='h-[40px] w-full py-[5px] mt-[20px] border-[1px] border-[#e1e1e1] border-solid'>
                            <input type='password' placeholder='Contraseña' className='w-full h-full px-[15px] text-[24px] border-none bg-inherit focus:outline-none' />
                        </div>

                        <div className='flex items-center gap-2 ml-2 mt-[20px]'>
                            <input type='checkbox' className='w-[20px] h-[20px]' />
                            <label>
                                Recordar Contraseña
                            </label>
                        </div>
                        <button className='bg-gray-200 h-[80px] mt-[20px] text-[30px] uppercase font-[600] rounded-[20px] hover:bg-[#d9d9d9]'>Entrar</button>
                    </form>


                    <p className='text-center mt-[20px] mb-[10px]'>o inicia sesion con: </p>


                    <div className='flex w-[512px] justify-evenly mb-[50px] mx-auto'>
                        <span className='py-[10px] px-[20px] border-[1px] border-solid'>Facebook</span>
                        <span className='py-[10px] px-[20px] border-[1px] border-solid'>Google</span>
                        <span className='py-[10px] px-[20px] border-[1px] border-solid'>Apple</span>

                    </div>

                    <div className='flex w-[512px] justify-between m-auto my-[40px]'>
                        <button>Has olvidado tu Contraseña? </button>
                        <button onClick={()=> navigate('/register')} 
                        className='border-x-0 border-t-0 border-solid border-transparent hover:border-black'>¿Crear una cuenta?</button>
                    </div>

                </div>


                <p className='flex justify-center items-center mb-[20px] font-["Inter"] text-[24px]'>&copy; 2023 - Derechos Reservados</p>
            </section>
        </>
    )
}

export default Login
