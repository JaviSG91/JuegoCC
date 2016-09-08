var dbURI    = 'mongodb://localhost/test'
  , should   = require('should')
  , mongoose = require('mongoose')
  , Dummy    = mongoose.model('user', new mongoose.Schema({
    username: String,
     jugada: {
    puntuacion: Number,
    dificultad: Number,
    fecha: Date
  }}))
  , clearDB  = require('mocha-mongoose')(dbURI)
;
 
var user = require('../app')
describe("Probando la BD", function() {
  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
 
    mongoose.connect(dbURI, done);
  });
 
  it("can be saved", function(done) {
	
	var user1 = new user({ username: 'Javisg', jugada: {
		    puntuacion: 10,
		    dificultad: 2,
		    fecha: "06/09/2016"
        }



   	 });
    user1.save(done);
  });
 
  it("Comprueba nombre", function(done) {
	   var user2 = new user({ username: 'Javisg', jugada: {
		    puntuacion: 10,
		    dificultad: 2,
		    fecha: "06/09/2016"
         }

	});
	user2.should.be.an.instanceOf(Object).and.have.property('username', 'Javisg');
//console.log(user.user1);
 	done();
	  
	  

	 
	 
	
  });
 
  /*it("can clear the DB on demand", function(done) {
    new Dummy({a: 5}).save(function(err, model){
      if (err) return done(err);
 
      clearDB(function(err){
        if (err) return done(err);
 
        Dummy.find({}, function(err, docs){
          if (err) return done(err);
 
          console.log(docs);
 
          docs.length.should.equal(0);
          done();
        });
      });
    });
  });*/
});
