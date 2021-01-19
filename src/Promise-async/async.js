
function makeJob(done) {
    return new Promise((resolve, reject) => {
        if (done) {
            const workIsDone = "Work is done";
            // throw "error";
            resolve(workIsDone);
        } else {
            const workIsNotDone = "Work is not done";
            resolve(workIsNotDone);
        }
        reject(console.error)
    });
};


(async () => {
    await makeJob(false).then(message => {
        console.log(message);
    }).catch(error => {
        console.log(error);
    });
})();

