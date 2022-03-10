import axios from "axios";
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  Button,
  Figure,
} from "react-bootstrap";
function Login() {
  const [log, setLog] = useState(false);
  let peticion = () => {
    axios
      .post("http://localhost:8000/api/v1/login/", {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data["token"]);
        localStorage.setItem("id_user", response.data["user_id"]);
        localStorage.setItem("username", response.data["username"]);
        localStorage.setItem("email", response.data["email"]);
        localStorage.setItem("first_name", response.data["first_name"]);
        localStorage.setItem("last_name", response.data["last_name"]);
        setLog(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="pt-5" style={{ width: "25%" }}>
      <Figure.Caption>
        <p class="p-3 bg-info text-white">
          <h1>Login</h1>
        </p>
      </Figure.Caption>
      <FloatingLabel label="Username" className="mb-3">
        <Form.Control
          type="email"
          id="username"
          placeholder="name@example.com"
        />
      </FloatingLabel>
      <FloatingLabel label="Password">
        <Form.Control type="password" id="password" placeholder="Password" />
      </FloatingLabel>
      <Button
        variant="success"
        onClick={() => {
          peticion();
        }}
      >
        Entrar
      </Button>{" "}
      <Button variant="primary">
        <NavLink className="text-light" to={"/register"}>
          Crear cuenta
        </NavLink>
      </Button>{" "}
      {log && <Navigate to={"/profile"} />}
    </Container>
  );
}

export default Login;
