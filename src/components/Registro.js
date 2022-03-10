import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Registro(){
    const [log, setLog]=useState(false)
    let peticion = ()=>{
        axios.post('http://localhost:8000/api/v2/registernew/',{
            'username':document.getElementById('username2').value,
            'password':document.getElementById('password2').value,
            'password2':document.getElementById('password3').value,
            'email':document.getElementById('email2').value,
            'first_name':document.getElementById('first_nameR').value,
            'last_name':document.getElementById('last_nameR').value,
        }).then(response=>{
            alert('Se ha registrado el usuario de manera exitosa')
            setLog(true)
        }).catch(e=>{alert('No se pudo registrar :<')})
    }
    return (
        <div>
            <input type="text" placeholder="Username" name="username" id="username2" />
            <input type="password" placeholder="Password" name="password" id="password2"/>
            <input type="password" placeholder="Password" name="password2" id="password3"/>
            <input type="email" placeholder="Email" name="correo" id="email2" />
            <input type="text" placeholder="First name" name="first_name" id="first_nameR"/>
            <input type="text" placeholder="Last name" name="last_name" id="last_nameR"/>
            <button onClick={()=>{
                peticion()
            }
            }>Registrar</button>
            {log && <Navigate to={'/login'}/>}
        </div>
    )

}

export default Registro