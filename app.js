'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
     jugada: {
    puntuacion: Number,
    dificultad: Number,
    fecha: Date
  },
});

UserSchema.methods.puntuacion = function() {
  // add some stuff to the users name
  //this.username = this.username + '-dude'; 

  return this.username;
};

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var info='';

var vision=express();


var user = mongoose.model('Usuario', UserSchema);
var user1 = new user({ username: 'Javisg', jugada: {
    puntuacion: 10,
    dificultad: 2,
    fecha: "06/09/2016"
  }
});

vision.use(express.static(__dirname + '/../public'));
vision.use(bodyParser.urlencoded({ extended: false }));
vision.set('ip', process.env.IP|| '0.0.0.0');
vision.set('port', (process.env.PORT || 5000));
console.log("Server iniciado");

vision.get('/',function(req,res){
var pagina='<!doctype html><html><head></head><body>';   
    pagina+= '<form action=\"Registro\" method=\"post\">';
    pagina += '<br><a href="/index.html">Link</a></br>';
    //pagina += '<br><input type=\"submit\" value=\"Registrar\"></br>';
    
    pagina += '</form>';
    pagina += '</body></html>';
	res.send(pagina);
});
vision.listen(vision.get('port'), function() {
  console.log('Node app is running on port', vision.get('port') + 'liste adress demand: '+vision.get('ip'));
}); 

user1.save(function (err, user1) {
  if (err) return console.error(err);
	console.log("Guardado");
});



module.exports = user;
//mongoose.connect('mongodb://localhost/test');






// hacemos referencia a la dependencia 
//var mongodb = require('mongodb');

// obtenemos el server MongoDB que dejamos corriendo
// *** el puerto 27017 es el default de MongoDB
//var server = new mongodb.Server("127.0.0.1", 27017, {});

// obtenemos la base de datos de prueba que creamos
//var dbTest = new mongodb.Db("test", server, {})

// abrimos la base pasando el callback para cuando esté lista para usar
/*dbTest.open(function (error, client) {
  if (error) throw error;

  //en el parámetro client recibimos el cliente para comenzar a hacer llamadas
  //este parámetro sería lo mismo que hicimos por consola al llamar a mongo
  
  //Obtenemos la coleccion personas que creamos antes
  var collection = new mongodb.Collection(client, "Usuarios");
  
  //disparamos un query buscando la persona que habiamos insertado por consola
  collection.find({'username': 'Javisg'}).toArray(function(err, docs) {

    //imprimimos en la consola el resultado
    console.dir(docs);
  });
});*/
