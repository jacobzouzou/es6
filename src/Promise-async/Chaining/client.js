//fetch
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
