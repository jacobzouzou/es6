const [first, second,, fourth]=[10,20,30,40];
console.log(fourth);

const [one, ...restOfItems]=[10,20,30,40];
console.log(restOfItems);

const data={
    temp1:'001',
    temp2:'002',
    firstName:'Jacob',  
    lastName:'ZOUZOU'
}

const {temp1, temp2, ...person}=data;
const me={
    ...person,
}
console.log(me.firstName,"", me.lastName);