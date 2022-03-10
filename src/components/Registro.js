import axios from "axios";
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Container, Form, Button, Figure } from "react-bootstrap";

function Registro() {
  const [log, setLog] = useState(false);
  let peticion = () => {
    axios
      .post("http://localhost:8000/api/v2/registernew/", {
        username: document.getElementById("username2").value,
        password: document.getElementById("password2").value,
        password2: document.getElementById("password3").value,
        email: document.getElementById("email2").value,
        first_name: document.getElementById("first_nameR").value,
        last_name: document.getElementById("last_nameR").value,
      })
      .then((response) => {
        alert("Se ha registrado el usuario de manera exitosa");
        setLog(true);
      })
      .catch((e) => {
        alert("No se pudo registrar :<");
      });
  };
  return (
    <Container className="pt-5" style={{ width: "25%" }}>
           <Figure.Caption>
        <p class="p-3 bg-info text-white">
          <h1>Register</h1>
        </p>
      </Figure.Caption>
      <Form>
        <Form.Group className="mb-1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            id="username2"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="password2"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password2"
            id="password3"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="correo"
            id="email2"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            name="first_name"
            id="first_nameR"
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            name="last_name"
            id="last_nameR"
          />
        </Form.Group>
      </Form>
      <Button variant="primary" size="sm">
        <NavLink className="text-light" to={"/login"}>
          Volver
        </NavLink>
      </Button>{" "}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          peticion();
        }}
      >
        Registrar
      </Button>
      {log && <Navigate to={"/login"} />}
    </Container>
  );
}

export default Registro;
