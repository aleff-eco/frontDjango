import React from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, NavLink } from "react-router-dom";


export default function Inicio() {
  return (
    <div>
      {localStorage.getItem("token") === null && <Navigate to={"/login"} />}
      <h1>probando probando 123 pampazo</h1>
      <Form>
      <Button
        variant="primary"
      >
          <NavLink className="text-light" to={'/login'}>Logearte</NavLink>
      </Button>{" "}
      <Button
        variant="primary"
      >
          <NavLink className="text-light" to={'/register'}>Crear cuenta</NavLink>
      </Button>{" "}
      </Form>
    </div>
  );
}
