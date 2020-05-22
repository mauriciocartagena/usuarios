const userDelete = (id_usuario) => {
  var requestOptions = {
    method: "DELETE",
  };
  fetch(
    " https://xoxluxwgqh.execute-api.us-east-2.amazonaws.com/default/aws-delete?id=" +
      id_usuario +
      "",
    requestOptions
  )
    .then(() => {
      console.log("sucess");
    })
    .catch((error) => console.log("error", error));
};

export default userDelete;
