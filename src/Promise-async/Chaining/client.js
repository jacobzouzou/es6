<<<<<<< HEAD:src/chainingServerPromise.js
//
// const path = require("path");
// const fs=require("fs")

//##############################################################################3333333
//web server
//##############################################################################3333333
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ name: "Jacob" });
});

const users= require("./data/users.json");
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3000, () => console.log("Server ready: http://localhost:3000"));
//##############################################################################3333333

//##############################################################################3333333
//Web client
//##############################################################################3333333
=======
//fetch
>>>>>>> ba9c9dc28821dd7d21f98991fc35815e4d303344:src/Promise-async/Chaining/client.js
const fetch = require("node-fetch");

const getStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};
const responseJson = (response) => response.json(); //return a promise

//url must use http protocol so, file must be serve  from  web server: /
fetch("http://localhost:3000")
  .then(getStatus)
  .then(responseJson)
  .then((data) => {
    console.log("\n")
    console.log("http://localhost:3000/:")
    console.log(`Object entrees : ${Object.entries(data)}`);
    console.log(`Object values : ${Object.values(data)}`);
    console.log(`Object Json string: ${JSON.stringify(data)}`);
  })
  .catch((error) => {
    console.log(`Failed: ${error}`);
  });


fetch("http://localhost:3000/users")
  .then(getStatus)
  .then(responseJson)
  .then((data) => {
    console.log("\n")
    console.log("http://localhost:3000/users:")
    console.log(`Json response: ${JSON.stringify(data)}`);
  })
  .catch((error) => {
    console.log(`Failed: ${error}`);
  });
//##############################################################################3333333
