
function usePromise(done) {
    return new Promise((resolve, reject) => {
        if (done) {
            const workIsDone = "Work is done";
            resolve(workIsDone);
        } else {
            const workIsNotDone = "Work is not done";
            resolve(workIsNotDone);
        }
        reject(console.error)
    });
};


(async () => {
    await usePromise(true).then(message => {
        console.log(message);
    }).catch(error => {
        console.log(error);
    });
})();

