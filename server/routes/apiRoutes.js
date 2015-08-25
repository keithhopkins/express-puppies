// dependencies
var express = require('express');
var router = express.Router();
var utilities = require('../logic/puppyUtility');


// GET - all puppies
router.get('/puppies', function(req, res, next) {
  console.log("test");
  var response = utilities.handleAllGet();
  res.json(response);
});

// GET - single puppy
router.get('/puppy/:id', function(req, res, next) {
  var response = utilities.handleSingleGet(req.params.id);
  res.json(response);
});

// POST - single puppy
router.post('/puppies', function(req, res, next) {
  var response = utilities.handlePost(req.body.puppyID, req.body.puppyName, req.body.puppyAge);
  if(response.error){
    //refactor for correct error message
    res.status(400).json(response.error);
  } else {
    res.json(response);
  }
});

// PUT - single puppy
router.put('/puppy/:id', function(req, res, next) {
  var response = utilities.handlePut(req.params.id, req.body);
  res.json(response);
});

// DELETE - single puppy
router.delete('/puppy/:id', function(req, res, next) {
  var response = utilities.handleDelete(req.params.id);
  res.json(response);
});

module.exports = router;
