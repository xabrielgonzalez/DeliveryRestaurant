import React from 'react'
import { LogoPage } from '../svgComponents/LogoDelivery'

const Register = () => {
    return (
        <section className='max-w-[650px] my-0 mx-auto'>

            <div className='flex justify-center items-center mt-[20px]'>
                <LogoPage />
            </div>

            <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='text'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    placeholder='Nombre'
                />
            </div>

            <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='text'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    placeholder='Apellido'
                />
            </div>

            <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='email'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    placeholder='E-mail'
                />
            </div>

            <div>
                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] mt-[20px] flex items-center justify-center'>
                    <input
                        type='password'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='Contraseña'
                    />
                </div>
                <p className='mb-[20px] text-end'>(La contraseña debe contener 8 caracteres)</p>
            </div>

            <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='text'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    placeholder='Repitir Contraseña'
                />
            </div>

            <div className='h-[50px]  flex items-center justify-between mb-[20px]'>


                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[50%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='Direccion'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='N˚'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='Piso'
                    />
                </div>
            </div>

            <div className='h-[50px]  flex items-center justify-between mb-[20px]'>


                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[30%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='Direccion'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[30%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='N˚'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[30%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        placeholder='Piso'
                    />
                </div>
            </div>

            <p className='flex items-center justify-start'><i className='font-bold'>Metodos de Pagos</i>. (dentro de la pagina puede modificarlos o agregar nuevos)</p>

            <fieldset>
                <legend>Select a maintenance drone:</legend>

                <div>
                    <div className='space-x-2'>
                        <input type="radio" id="huey" name="drone" value="huey" />
                        <label for="huey">Credito / Debito</label>
                    </div>

                    <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-full h-[50px] my-[5px] flex items-center justify-center'>
                        <input
                            type='text'
                            className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                            placeholder='Nombre'
                        />
                    </div>

                    <div className='h-[50px]  flex items-center justify-start  gap-3 mb-[20px]'>


                        <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                            <input
                                type='text'
                                className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                                placeholder='Direccion'
                            />
                        </div>

                        <div className='border-[1px] border-solid border-gray-400 bg-green-200 w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                            <input
                                type='text'
                                className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                                placeholder='N˚'
                            />
                        </div>
                    </div>
                </div>



                <div>
                    <div className='space-x-2'>
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey">Paypal </label>
                    </div>

                    <button className=''>Paypal</button>
                </div>

                <div>

                <div className='space-x-2'>
                    <input type="radio" id="louie" name="drone" value="louie" />
                    <label for="louie">Mercadopago</label>
                </div>
                <button className=''>Mercadopago</button>

                </div>
            </fieldset>


            <button className='bg-red-200 h-[90px] flex justify-center items-center w-[300px] my-0 mx-auto'>Registrarse</button>

            <p className='text-center mt-[20px] mb-[80px]'>¿Ya tienes una cuenta? Regresar a Login</p>

        </section>
    )
}

export default Register
