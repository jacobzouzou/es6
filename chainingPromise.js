//web server
// const path = require('path');
const express = require("express");
const app = express();
app.get('/', (req, res) =>{
  //  res.type("json");
   res.json({name:"Jacob"});
  }
);
app.listen(3000, () => console.log('Server ready: listen to http://localhost:3000'))

//Fetch
const fetch = require("node-fetch");

const statusPromise = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
//json() return a promise
const responseJson = response => response.json();

//url must http protocol so, file must be serve  from  web server: / from root
fetch("http://localhost:3000")
  .then(statusPromise)
  .then(responseJson)
  .then(data => {
    console.log(`Object entrees : ${Object.entries(data)}`);
    console.log(`Object values : ${Object.values(data)}`);
    console.log(`Object Json string: ${JSON.stringify(data)}`);
  }).catch(error => {
    console.log(`Failed: ${error}`);
  });

// fetch("/users.json")
//   .then(statusPromise)
//   .then(responseJson)
//   .then(data => {
//     console.log(`Json response: ${JSON.stringify(data)}`);
//   }).catch(error => {
//     console.log(`Failed: ${error}`);
//   });