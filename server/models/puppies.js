function Puppy(puppyID, puppyName, puppyAge) {
  this.puppyID = puppyID,
  this.puppyName = puppyName,
  this.puppyAge = puppyAge;
}

// data
var tempPuppyArray = [];
var newPuppy = new Puppy(1, 'Bart', 20);
var johnPuppy = new Puppy(2, 'John', 2);
var danPuppy = new Puppy(3, 'Dan', 15);
tempPuppyArray.push(newPuppy, johnPuppy, danPuppy);

module.exports = {
  Puppy: Puppy,
  tempPuppyArray: tempPuppyArray
};
