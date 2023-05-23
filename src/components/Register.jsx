import React from 'react'
import { useForm } from 'react-hook-form'
import { LogoPage } from '../svgComponents/LogoDelivery'
import { User } from '../svgComponents/User'
import { handleNameChange,
     handleEmailChange,
     handlePassChange,
     handleRPassChange,
     handleAddressChange,
     handleNumberChange,
     handleFloorChange,
     handleNumberCardChange,
     handleNumberCvcChange } from '../validation/valiForm'


const Register = () => {
    const { register,handleSubmit } = useForm()
    
    
      

    return (
        <form className='max-w-[650px] my-0 mx-auto' onSubmit={handleSubmit}>

            <div className='flex justify-center items-center mt-[20px]'>
                <LogoPage />
            </div>

            <div className='border-[1px] border-solid border-gray-400 rounded-md w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='text'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/,'')"
                    {...register('name')}
                    onChange={handleNameChange}
                    maxLength={20}
                    placeholder='Nombre'
                />
               
            </div>

            <div className='border-[1px] border-solid border-gray-400 rounded-md w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='text'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    {...register('surname')}
                    onChange={handleNameChange}
                    maxLength={20}
                    placeholder='Apellido'
                />
            </div>

            <div className='border-[1px] border-solid border-gray-400 rounded-md w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='email'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    {...register('email')}
                    onChange={handleEmailChange}
                    maxLength={64}
                    placeholder='E-mail'
                />
            </div>

            <div>
                <div className='border-[1px] border-solid border-gray-400 rounded-md w-full h-[50px] mt-[20px] flex items-center justify-center'>
                    <input
                        type='password'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        {...register('pass')}
                        onChange={handlePassChange}
                        maxLength={8}
                        placeholder='Contraseña'
                    />
                </div>
                <p className='mb-[20px] text-end'>(La contraseña debe contener 8 caracteres)</p>
            </div>

            <div className='border-[1px] border-solid border-gray-400 rounded-md w-full h-[50px] my-[20px] flex items-center justify-center'>
                <input
                    type='password'
                    className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                    {...register('rpass')}
                    onChange={handleRPassChange}
                    maxLength={8}
                    placeholder='Repitir Contraseña'
                />
            </div>

            <div className='  flex items-center justify-between'>


                <div className='border-[1px] border-solid border-gray-400 rounded-md w-[50%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        {...register('address')}
                        onChange={handleAddressChange}
                        maxLength={20}
                        placeholder='Direccion'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 rounded-md w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='numberout text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        {...register('number')}
                        onChange={handleNumberChange}
                        maxLength={3}
                        placeholder='N˚'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 rounded-md w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='numberout text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                        {...register('floor')}
                        onChange={handleFloorChange}
                        maxLength={2}
                        placeholder='Piso'
                    />
                </div>


            </div>
            <div className='flex items-center justify-between pb-5'>
                <div class='border-[1px] border-solid border-gray-400 rounded-md h-[50px]  flex items-center justify-center'>
                    <select name="Country" className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[5px] cursor-pointer'
                    {...register('country')}>
                        <option disabled selected hidden value="">País</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Perú">Perú</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="República Dominicana">República Dominicana</option>
                        <option value="Panamá">Panamá</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                </div>


               {/*  <div className='border-[1px] border-solid border-gray-400 rounded-md w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full mx-[5px]'
                        placeholder='Estado/Region'
                    />
                </div>

                <div className='border-[1px] border-solid border-gray-400 rounded-md w-[20%] h-[50px] my-[20px] flex items-center justify-center'>
                    <input
                        type='text'
                        className='text-[24px] bg-inherit border-none h-[80%] w-full '
                        placeholder='Ciudad'
                    />
                </div> */}


            </div>



            <p className='flex items-center justify-start'><i className='font-bold'>Metodos de Pagos</i>. (dentro de la pagina puede modificarlos o agregar nuevos)</p>

            <fieldset>
            

                <div>
                    <div className='space-x-2'>
                        <input type="radio" id="huey" name="drone" value="huey" />
                        <label for="huey">Credito / Debito</label>
                    </div>

                    <div className='border-[1px] pb border-solid border-gray-400 rounded-md w-full h-[50px] my-[5px] flex items-center justify-center'>
                        <input
                            type='text'
                            className='numberout text-[24px] bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                            {...register('ncard')}
                           onChange={handleNumberCardChange}
                           maxLength={16}
                            placeholder='Numero de Tarjeta'
                        />
                    </div>
                    <div className='  flex items-center justify-between gap-4'>
                    <div className='border-[1px] pt border-solid border-gray-400 rounded-md w-full h-[50px] my-[5px] mb-8 flex items-center justify-center'>
                       
                        <input
                            type='month'
                            className='numberout text-[24px] pt- bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                            {...register('cardmmaa')}
                            placeholder='MM/AA'
                        />
                    </div>

                    <div className='border-[1px] pt border-solid border-gray-400 rounded-md w-full h-[50px] my-[5px] mb-8 flex items-center justify-center'>
                        <input
                            type='text'
                            className='numberout text-[24px] pt- bg-inherit border-none h-[80%] w-full mx-[15px] focus:outline-none'
                            {...register('cardcvc')}
                            onChange={handleNumberCvcChange}
                            maxLength={3}
                            placeholder='CVC'
                        />
                    </div>
                </div>
                
                </div>



                <div>
                    <div className='space-x-2'>
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey">Paypal </label>
                    </div>

                    <button className='pl-2 p-1 border-[2px] rounded-full border-solid border-red-600' style={{ color: 'red', fontWeight: 'bold' }}>Ir a Paypal</button>

                </div>

                <div>

                    <div className='space-x-2 mt-8'>
                        <input type="radio" id="louie" name="drone" value="louie" />
                        <label for="louie">Mercadopago</label>
                    </div>
                    <a href="">
                    <button className='pl-2 p-1 border-[2px] rounded-full  border-solid border-red-600' style={{ color: 'red', fontWeight: 'bold' }}> Ir Mercadopago</button>
                    </a>
                </div>
            </fieldset>


            <button className=' h-[90px] flex justify-center items-center w-[300px] my-0 mx-auto rounded-xl  border-solid border-red-600'  style={{ color: 'red', fontWeight: 'bold' }}>Registrarse</button>
                <div className='flex justify-center items-center pt-3'>
                   
                    <a href="#" className='flex justify-center items-center'> <User/> ¿Ya tienes una cuenta? Regresar a Login</a>
                 
                </div>

        </form>
    )
}

export default Register
