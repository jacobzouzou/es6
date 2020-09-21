function* calculator(input) {
    var doubleThat = 2 * (yield (input / 2));
    var another = yield (doubleThat);
    return (input * doubleThat * another);
}
let calc = calculator(3);

let result=calc.next();
// //first iteration return 10/2
// function* calculator() {
//     return 10 / 2;
// }
console.log(result);

result=calc.next(9);
//second iteration return douleThat= 7 * 2
// function* calculator(7) {
//     let doubleThat= 7*2;
//     return doubleThat;
// }
console.log(result);

result=calc.next(99);
//second iteration return 14000
// function* calculator(100) {
//     return 10 * 14 * 100;
// }
console.log(result);
