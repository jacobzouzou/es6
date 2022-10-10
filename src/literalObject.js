const mystery = "answer";
const PI = Math.PI;

const obj = {
  //dynamic tied [variable]= variable value
  [mystery]: 509,
  mystery: 444,
  //dynamic tied PI:PI  ~ PI
  PI,
};

console.log("Object answer: " + obj.answer);
console.log("Object mystery: " + obj.mystery);
console.log("Object PI: " + obj.PI);
