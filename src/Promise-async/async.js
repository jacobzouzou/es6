
function notify(done) {
    return new  Promise ((resolve) => {
        if (done) {
            resolve("Work is done");
        } else {
            throw Error(JSON.stringify({message: 'Fail'}));
            // reject("Fail");
        }
    })};


const promiseNotify= (done) => {
    console.log("Enter in promise");
    notify(done).then(result => {
        console.log("Promise: Begin callback");
        console.log("Promise: ",result)
        setTimeout(() => {
            console.log("Promise dalayed task: delayed ",result)
        }, 500);
        console.log("Promise: End callback");

    });
    console.log("Go out the promise");
}


const asyncNotify = async (done) => {
    console.log("Enter in async");
    await notify(done).then(result => {
        console.log("Async: Begin callback");
        //as await
        console.log("Ansyc: ", result);
        setTimeout(() => {
            console.log("Ansyc delayed task: dalayed ", result);
        }, 1000);
        console.log("Async: End callback");
    });
    console.log("Go out the Async");
}

promiseNotify(true);
asyncNotify(true);

