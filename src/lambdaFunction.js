//Execution context
console.log(this);
this.id = 1;

test = {
    id:2,
    classicFunc: function () {
        //this in  function target object context 
        console.log("Classic function target object instance : ", this.id);
    },
    arrowFunc: ()=> {
        //this in arrow function target global context 
        console.log("Arrow function target execution context :",this.id);
    }
}

test.classicFunc();
test.arrowFunc(); 