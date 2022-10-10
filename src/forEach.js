var bob = {
  name: "Bob",
  friends: ["Jacob", "Sally", "Tom"],
  getFriends() {
    this.friends.forEach((friend) => console.log(this.name + " knows " + friend));
  },
};

console.log(bob.getFriends());
