const userUpdate = (id_user, name, lastName, secondName, ci, gender, city) => {
  var requestOptions = {
    method: "PUT",
    redirect: "follow",
  };

  fetch(
    "http://localhost:3004/update/" +
      id_user +
      "/" +
      name +
      "/" +
      lastName +
      "/" +
      secondName +
      "/" +
      ci +
      "/" +
      gender +
      "/" +
      city +
      "/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export default userUpdate;
