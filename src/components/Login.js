import axios from "axios"
import "../../index.css"
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
function Login(){
    const [log, setLog]=useState(false)
    let peticion = ()=>{
        axios.post('http://localhost:8000/api/v1/login/',{
            'username':document.getElementById('username').value,
            'password':document.getElementById('password').value
        }).then(response=>{
            localStorage.setItem('token', response.data['token']);
            localStorage.setItem('id_user',response.data['user_id']);
            localStorage.setItem('username',response.data['username']);
            localStorage.setItem('email',response.data['email']);
            localStorage.setItem('first_name',response.data['first_name']);
            localStorage.setItem('last_name',response.data['last_name'])
            setLog(true);
        }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <div id="login" >
            <input type="text" placeholder="Username" name="correo" id="username" />
            <input type="password" placeholder="Password" name="Password" id="password"/>
            <button onClick={()=>{
                peticion()
            }
            }>Iniciar sesión</button>
            <NavLink to={'/register'}>Crear cuenta</NavLink>
            {log && <Navigate to={'/profile'}/>}
        </div>
    )



}

export default Login