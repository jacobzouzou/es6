
function ExecuteTask_1() {
    return new Promise((resolve)=>{
        console.log("Enter task1");
        console.log("Execute task 1");
        setTimeout(() => {
            console.log("Delayed task 1");
        }, 2000);
        console.log("Go out task 1");
        resolve();
    });
    // console.log("excecute show 1 task1");
    // setTimeout(() => {
    //     console.log("excecute show 1 task 2");
    // }, 2000);
    // console.log("excecute show 1 end task");
    // return Promise.resolve("done");
};

function ExecuteTask_2() {
    console.log("Enter task 2");
    console.log("Execute task 2");
    setTimeout(() => {
        console.log("Delayed task 2");
    }, 1000);
    console.log("Go out task 2");
    return Promise.resolve();
};


const test1= async ()=>{
    ExecuteTask_1().then(ExecuteTask_2()).then(()=>{console.log("End chaining");});    
}

const test2= async ()=>{
    // ExecuteTask_1().then().then(ExecuteTask_2()).then(()=>{console.log("End chaining");});    
    ExecuteTask_1().then().then(ExecuteTask_2());    
}
// test1();
test2();

