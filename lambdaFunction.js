this.id = 'exports';
// console.log(this);

test = {
    func1: function () {
        console.log(this);
    },
    func2: ()=> {
        console.log(this);
    }
}

test.func1();
test.func2(); 