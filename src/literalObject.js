const mystery = "answer";
const PI = Math.PI;

console.log("mystery value: "+mystery);
console.log(PI);

const obj = {
  p1: 10,
  p2: 20,
  f1() {
    console.log("Hello f1");
  },
  f2: () => {
    console.log("Hello f2");
  },
  mystery: 42,
  [mystery]: 42,
  PI,
};
//dynamic tied

console.log(obj.f1());
console.log(obj.f2());
console.log("Object answer: "+ obj.answer);
console.log("Object mystery: "+ obj.mystery);
console.log("Object PI: "+obj.PI);
console.log("PI: "+PI);
