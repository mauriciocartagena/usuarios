const userDelete = (id_usuario) => {
  var requestOptions = {
    method: "DELETE",
  };
  fetch("http://localhost:3004/usuario/" + id_usuario + "", requestOptions)
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => console.log("error", error));
};

export default userDelete;
