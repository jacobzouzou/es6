// var a = () => {};
// var a = (b) => b;

const double = [1, 2, 3].map((item) => item * 2);
console.log(double); // [2,4,6]

var bob = {
  name: "Bob",
  friends: ["Jacob", "Sally", "Tom"],
  printFriends() {
    this.friends.forEach((friend) => console.log(this.name + " knows " + friend));
  },
};

console.log(bob.printFriends());
