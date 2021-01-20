const myArray=[10,20,30,40];
console.log("Destruct array: ",myArray);
const [first, second,, fourth]=myArray;
console.log("Fourth element:",fourth);

const [one, ...restOfItems]=myArray;
console.log("Three last elements:", restOfItems);

const data={
    firstName:'Jacob',  
    lastName:'ZOUZOU'
}

console.log("Destructure object:", data);
const {lastName}=data;
console.log("Get last name: ",lastName);
const {...person}=data;
console.log("Get object: ",person);
const me={...person}
console.log("Get object: ",me);
console.log("Get first name:", person.firstName);
