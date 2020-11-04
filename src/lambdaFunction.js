this.id = 'exports';
// console.log(this);

test = {
    func1: function () {
        //this in  function target object context 
        console.log(this);
    },
    func2: ()=> {
        //this in arrow function target global context 
        console.log(this);
    }
}

test.func1();
test.func2(); 