import React from 'react'
import {Routes,Route,} from 'react-router-dom';
import Inicio from './Inicio';
import Login from './Login';
import Profiles from './Profiles';
import Registro from './Registro';

export default function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Registro />}/>
                <Route path='/profile' element={<Profiles/>}/>
            </Routes>
        </div>
    );
}