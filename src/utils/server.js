const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3004;

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

require("./api")(app, connection);

app.listen(PORT, () => {
  console.log(`App runing on port ${PORT}`);
});
