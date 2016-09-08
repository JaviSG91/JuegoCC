var user = require('./app');

var chris = new user({
  username: 'Chris'
  
});


// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});


user.find({ username: 'Javie' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});
