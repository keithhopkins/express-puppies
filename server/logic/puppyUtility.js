var puppyData = require('../models/puppies');
var tempArray = puppyData.tempPuppyArray;


function handleAllGet() {
  return tempArray;
}

function handleSingleGet(puppyID) {
  var pup = puppyFilter(puppyID);
  if (pup.length>0){
    return pup[0];
  } else {
    return {message: "Puppy ain't existing here"};
  }
}

function handlePost(puppyID, puppyName, puppyAge) {
  // does the puppy already exist...
  var pup = puppyFilter(puppyID);
  // if so - throw an error
  if (pup.length>0){
    return {error: "Yo! That puppy already exists!"};
  } else { // if not - create a new instance, return a success
    var newPostPuppy = new puppyData.Puppy(
      parseInt(puppyID),
      puppyName,
      parseInt(puppyAge)
    );
    tempArray.push(newPostPuppy);
    return {message: "Puppy added successfully.", puppy:newPostPuppy};
  }
}

function handlePut(puppyID, submittedBodyObject) {
  // test if any data is passed in
  if(Object.keys(submittedBodyObject).length === 0) {
    return {message: "Please enter something to change!"};
  }
  // validating if the puppy's age is a number
  if(submittedBodyObject.puppyAge && isNaN(parseInt(submittedBodyObject.puppyAge))) {
    return {message: "Please enter a number for the puppy's age!"};
  }
  var pup = puppyFilter(puppyID);
  if (pup.length>0){
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].puppyID === parseInt(puppyID)) {
        for (var key in submittedBodyObject) {
          if (key === 'puppyName') {
            tempArray[i].puppyName = submittedBodyObject.puppyName;
          } else if (key === 'puppyAge') {
           tempArray[i].puppyAge = submittedBodyObject.puppyAge;
          }
        }
      }
    }
    return tempArray;
  } else {
    return {message: "Puppy ain't existing here"};
  }
}

function handleDelete(puppyID) {
  var pup = puppyFilter(puppyID);
  if (pup.length>0){
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].puppyID === parseInt(puppyID)) {
        var tempPuppy = tempArray.splice(i, 1);
        return {
          message: 'That puppy is gone!',
          puppy: tempPuppy
        };
      }
    }
  } else {
    return "Puppy ain't existing here";
  }
}

// helper methods
function puppyFilter(puppyID) {
  return tempArray.filter(function(puppy){
    return puppy.puppyID===parseInt(puppyID);
  });
}

module.exports = {
  handleAllGet: handleAllGet,
  handleSingleGet: handleSingleGet,
  handlePost: handlePost,
  handlePut: handlePut,
  handleDelete: handleDelete
};
