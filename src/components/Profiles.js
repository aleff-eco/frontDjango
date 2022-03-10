import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Figure, Container, Button } from "react-bootstrap";
export default function Profiles() {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [log, setLog] = useState(false);
  useEffect(() => {
    document.title = "Profile";
    get_image();
  }, []);

  let get_image = () => {
    axios
      .get(
        "http://localhost:8000/api/v1/profile/image/" +
          localStorage.getItem("id_user") +
          "/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setUrl("http://localhost:8000/api/v1/" + response.data["name_img"]);
      })
      .catch(() => {
        setUrl(
          "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
        );
      });
  };
  let post_image = () => {
    let data = new FormData();
    data.append("name_img", image);
    data.append("id_user", localStorage.getItem("id_user"));
    axios
      .post("http://localhost:8000/api/v1/profile/image/", data, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        get_image();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let put_image = () => {
    let data = new FormData();
    data.append("name_img", image);
    axios
      .put(
        "http://localhost:8000/api/v1/profile/image/" +
          localStorage.getItem("id_user") +
          "/",
        data,
        {
          headers: {
            "Content-type": "multipart/form-data",
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        get_image();
      });
  };

  let delete_Img = () => {
    axios
      .delete(
        "http://localhost:8000/api/v1/profile/image/" +
          localStorage.getItem("id_user") +
          "/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        get_image();
      })
      .catch((e) => {
        alert("inserta una imagen para eliminar");
      });
  };

  let setDatos = () => {
    let data = {
      username:
        document.getElementById("usernameP").value !== ""
          ? document.getElementById("usernameP").value
          : localStorage.getItem("username"),
      first_name:
        document.getElementById("first_nameP").value !== ""
          ? document.getElementById("first_nameP").value
          : localStorage.getItem("first_name"),
      last_name:
        document.getElementById("last_nameP").value !== ""
          ? document.getElementById("last_nameP").value
          : localStorage.getItem("last_name"),
      email:
        document.getElementById("emailP").value !== ""
          ? document.getElementById("emailP").value
          : localStorage.getItem("email"),
    };
    axios
      .put(
        "http://localhost:8000/api/v1/profile/modificate/" +
          localStorage.getItem("id_user") +
          "/",
        data,
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        localStorage.setItem("username", response.data["username"]);
        localStorage.setItem("first_name", response.data["first_name"]);
        localStorage.setItem("last_name", response.data["last_name"]);
        localStorage.setItem("email", response.data["email"]);
        document.getElementById("usernameP").value = "";
        document.getElementById("first_nameP").value = "";
        document.getElementById("last_nameP").value = "";
        document.getElementById("emailP").value = "";
        document.getElementById("usernameP").placeholder =
          localStorage.getItem("username");
        document.getElementById("first_nameP").placeholder =
          localStorage.getItem("first_name");
        document.getElementById("last_nameP").placeholder =
          localStorage.getItem("last_name");
        document.getElementById("emailP").placeholder =
          localStorage.getItem("email");
      });
  };

  return (
    <div className="App">
      <Figure className="mt-5">
        <Figure.Image
          width={171}
          height={180}
          src={url}
          alt="Imagen de usuario"
        />
        <Figure.Caption>
          <p class="p-2 bg-info text-white">Foto de perfil</p>
        </Figure.Caption>
      </Figure>
      <Container style={{ width: "20%" }}>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        <div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              if (image !== null) {
                if (
                  url !==
                  "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                ) {
                  put_image();
                } else {
                  post_image();
                }
              }
            }}
          >
            Agregar
          </Button>{" "}
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              delete_Img();
            }}
          >
            Eliminar
          </Button>
        </div>

        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="usernameP"
              type={"text"}
              placeholder={localStorage.getItem("username")}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="emailP"
              type={"text"}
              placeholder={localStorage.getItem("email")}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              id="first_nameP"
              type={"text"}
              placeholder={localStorage.getItem("first_name")}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              id="last_nameP"
              type={"text"}
              placeholder={localStorage.getItem("last_name")}
            />
          </Form.Group>
        </Form>

        <button
          onClick={() => {
            setDatos();
          }}
        >
          Actualizar datos
        </button>
        <button
          className="btnCe1"
          onClick={() => {
            localStorage.clear();
            setLog(true);
          }}
        >
          Cerrar Sesión
        </button>
        {(!localStorage.getItem("token") || log) && <Navigate to={"/login"} />}
      </Container>
    </div>
  );
}
