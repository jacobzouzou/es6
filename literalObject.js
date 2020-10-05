const mystery="answer";
const PI=Math.PI;

console.log(mystery);
console.log(PI);

const obj={
    p1:10,
    p2: 20, 
    f1(){
        console.log('Hello f1');
    },
    f2:()=>{
        console.log('Hello f2');    },
    mystery:42,
    [mystery]:42,
    PI
}
//dynamic tied

console.log(obj.f1());
console.log(obj.f2());
console.log(obj.answer);
console.log(obj.mystery);
console.log(obj.PI);
console.log(PI);

