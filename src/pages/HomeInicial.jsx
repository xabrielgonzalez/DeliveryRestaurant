import React, { useState } from 'react'
import Login from '../components/Login';
import ChooseRole from '../components/ChooseRole';

const HomeInicial = () => {
    const [basic,setBasic] = useState(false);
    return (
        <div>
            <div className='h-screen flex items-center justify-center'>
                {!basic && <ChooseRole setRole={setBasic}/>}
                {
                basic && <Login/>     
                }
            </div>
        </div>
    )
}

export default HomeInicial
