import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Login from '../components/Login';
import ChooseRole from '../components/ChooseRole';

const HomeInicial = () => {
    const [basic,setBasic] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
            <div className='h-screen flex items-center justify-center'>
                {!basic && <ChooseRole setRole={setBasic}/>}
                {
                basic && <Login/>     
                }
                   <button onClick={()=> navigate('/home')} style={{ border: "1px solid red" }} >Home</button>
                   <button onClick={()=> navigate('/home')} style={{ border: "1px solid red" }} >Home</button>
                   <br />
                   <br />
                   <button onClick={() => navigate('/restaurante')} style={{ border: "1px solid red" }}>restaurante</button>

            </div>
        
        </div>
    )
}

export default HomeInicial
