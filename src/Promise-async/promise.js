let done = false;

function makeJob(done) {
    return new Promise((resolve, reject) => {
        if (done) {
            const workIsDone = "Work is done";
            resolve(workIsDone);
        } else {
            const workIsNotDone = "Work is not done";
            resolve(workIsNotDone);
        }
    });
}

makeJob(true).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

