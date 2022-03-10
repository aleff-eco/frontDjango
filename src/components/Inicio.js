import React from "react";
import { Navigate } from "react-router-dom";

export default function Inicio(){
    return (
        <div>
            {localStorage.getItem('token') === null && <Navigate to={'/login'}/>}
            <h1>probando probando 123 pampazo</h1>
        </div>
    );
}