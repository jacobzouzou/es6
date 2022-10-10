function* calculator(input) {
    var doubleThat = 2 * (yield (input / 3));
    var another = yield (doubleThat);
    return (input * doubleThat * another);
}
let calc = calculator(3);

let result=calc.next();

//first iteration:
//input=3
//yield(input/3) => return (input/3)

// function* calculator(3) {
//     return 3/3;
// }
console.log(result);

result=calc.next(9);
//second iteration: 

//doubleThat= "2*input"
//yield(doubleThat) => return doubleThat 

// function* calculator(9) {
//     let doubleThat= 9*2;
//     return doubleThat;
// }
console.log(result);

result=calc.next(99);
//third iteration : 

//input = 3 (store in first iteration)
//doubleThat = 18 (store in second iteration)
//another = 99 (from last interation)

//return (input * doubleThat * another): 3 * 18 * 99

// function* calculator(99) {
//     return 3 * 18 * 99;
// }
//last next() return done;
console.log(result);
