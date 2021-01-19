//web server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Jacob" });
});

const users = require("./data/users.json");

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3000, () => console.log("Server ready: http://localhost:3000"));
