// DOM MANIPULATION
$(document).on('ready', function() {
  $('#success-message').hide();
  $('#error-message').hide();
  getPuppies();
});

// form submission
$('form').on('submit', function(e){
  e.preventDefault();
  var $puppyID = $('#puppy-id');
  var $puppyName = $('#puppy-name');
  var $puppyAge = $('#puppy-age');
  $.ajax({
    method: 'POST',
    url: '/api/v1/puppies',
    data: {
      puppyID: $puppyID.val(),
      puppyName: $puppyName.val(),
      puppyAge: $puppyAge.val()}
  })
  .done(function(data) {
    $puppyID.val('');
    $puppyName.val('');
    $puppyAge.val('');
    $('#success-message')
      .show()
      .html(data.message);
    $('#error-message').hide();
  })
  .fail(function(err){
    $('#error-message')
      .show()
      .html(err.responseJSON);
    $('#success-message').hide();
  });
});

// UTILITIES
function getPuppies(){
  $.ajax({
    method: 'GET',
    url: '/api/v1/puppies',
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function(err){
    console.log(err);
  });
}
