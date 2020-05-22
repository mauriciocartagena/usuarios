const userInsert = (name, lastName, secondName, ci, gender, city) => {
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  fetch(
    "https://ws6lhtnaig.execute-api.us-east-2.amazonaws.com/default/aws-insert?nombre=" +
      name +
      "&apellido_paterno=" +
      lastName +
      "&apellido_materno=" +
      secondName +
      "&ci=" +
      ci +
      "&genero=" +
      gender +
      "&direccion=" +
      city,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export default userInsert;
