import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import useInitialState from "../utils/hooks/useInitalState";
import userDelete from "../utils/hooks/delete";
import userUpdate from "../utils/hooks/update";
const API = "http://localhost:3004/";

function TableApi() {
  const initialState = useInitialState(API);
  const [stado, setStado] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apePaterno, setApePaterno] = useState(null);
  const [apeMaterno, setApeMaterno] = useState(null);
  const [ci, setCi] = useState(null);
  const [genero, setGenero] = useState(null);
  const [direccion, setDireccion] = useState(null);

  const eliminar = (id) => userDelete(id);
  const actualizar = (id_user, name, lastName, secondName, ci, gender, city) =>
    userUpdate(id_user, name, lastName, secondName, ci, gender, city);
  function modificar(
    id,
    { valor },
    nombre,
    ape_p,
    ape_m,
    ci,
    genero,
    direccion
  ) {
    setStado(valor);
    setIdUser(id);
    setNombre(nombre);
    setApePaterno(ape_p);
    setApeMaterno(ape_m);
    setCi(ci);
    setGenero(genero);
    setDireccion(direccion);
  }

  return initialState === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>C.I</th>
            <th>Genero</th>
            <th>Direccion</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {initialState.usuarios.length > 0 &&
            initialState.usuarios.map((usuario, id) => (
              <React.Fragment key={id}>
                <tr>
                  <th>{usuario.id_usuario}</th>
                  <th>{usuario.nombre}</th>
                  <th>{usuario.apellido_paterno}</th>
                  <th>{usuario.apellido_materno}</th>
                  <th>{usuario.ci}</th>
                  <th>{usuario.genero}</th>
                  <th>{usuario.direccion}</th>
                  <th>
                    <Button
                      variant="success"
                      onClick={() =>
                        modificar(
                          usuario.id_usuario,
                          { valor: true },
                          usuario.nombre,
                          usuario.apellido_paterno,
                          usuario.apellido_materno,
                          usuario.ci,
                          usuario.genero,
                          usuario.direccion
                        )
                      }
                    >
                      Modificar
                    </Button>
                  </th>
                  <th>
                    <Button
                      variant="danger"
                      onClick={() => eliminar(usuario.id_usuario)}
                    >
                      Eliminar
                    </Button>
                  </th>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
        {stado === true ? (
          <Modal show={true}>
            <Modal.Header closeButton onClick={() => setStado(false)}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onInput={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Apellido Paterno</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido Paterno"
                    value={apePaterno}
                    onInput={(e) => setApePaterno(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido Paterno"
                    value={apeMaterno}
                    onInput={(e) => setApeMaterno(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>C.I</Form.Label>
                  <Form.Control
                    type="num"
                    placeholder="C.I"
                    value={ci}
                    onInput={(e) => setCi(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Genero</Form.Label>
                  <Form.Control
                    as="select"
                    value={genero}
                    onInput={(e) => setGenero(e.target.value)}
                  >
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Direaccion"
                    value={direccion}
                    onInput={(e) => setDireccion(e.target.value)}
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setStado(false);
                    }}
                  >
                    Close
                  </Button>
                  {
                    <Button
                      variant="primary"
                      onClick={() =>
                        actualizar(
                          idUser,
                          nombre,
                          apePaterno,
                          apeMaterno,
                          ci,
                          genero,
                          direccion
                        )
                      }
                    >
                      Modificar
                    </Button>
                  }
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        ) : (
          () => console.log("cerrado")
        )}
      </Table>
    </>
  );
}

export default TableApi;
