const userUpdate = (
  id,
  nombre,
  apellido_paterno,
  apellido_materno,
  ci,
  genero,
  direccion
) => {
  var requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch(
    "https://9nlr2dh5oh.execute-api.us-east-2.amazonaws.com/default/aws-update?id=" +
      id +
      "&nombre=" +
      nombre +
      "&apellido_paterno=" +
      apellido_paterno +
      "&apellido_materno=" +
      apellido_materno +
      "&ci=" +
      ci +
      "&genero=" +
      genero +
      "&direccion=" +
      direccion +
      "",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export default userUpdate;
