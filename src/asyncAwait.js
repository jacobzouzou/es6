const https = require('https');

function find(url){
    return new Promise((resolve, reject)=>{
        https.get(url,(response)=>{
            let data="";
            response.on('data', (rd)=> data= data+rd);
            response.on('end', ()=> resolve(data));

            response.on('error', reject);
        });
    });
}


//consume promise

//with .then () syntaxe
find("https://www.javascript.com/").then(data=>console.log("Promise:", data.length));

//or with use async/await  syntaxe
const readAsync= async function read(){
    const data = await find("https://www.javascript.com/");
    console.log("Async:", data.length);
};
readAsync();

//short syntaxe

// (async function read(){
//     const data=await find("https://www.javascript.com/");
//     console.log(data.length);
// })();

