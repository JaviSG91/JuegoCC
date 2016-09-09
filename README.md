# JJuegoCC		 


## Instalación

```
      https://github.com/JaviSG91/JuegoCC.git
      npm install .
``` 

###Despliegue:
```
      npm start
```

###Test:
```
      npm test
```

###Acceso:
Se accede con la URL: http://localhost:5000/



##Hito1		
###Descripción		
 		
El proyecto consiste en crear una aplicación web a la que accederán usuarios con el propósito de jugar a un juego interactivo con distintos niveles de dificultad.		
Las funcionalidades que se recogen son:		
 		
 - Registro y Login		
 - Seleccionar distintas dificultades al juego		
 - Almacenar estadísticas de juego 		
 - Mostrar un ranking		
 		
###En cuanto a tecnologías:		
 		
 - Creación de la página web a través de HTML5 y Javascript	
 - MongoDB para la gestión de la base de datos		
 - Finalmente para la conexión con la base de datos, se hará uso de NodeJS



##Hito2	
Se ha creado un archivo `Packaje.json` que lleva a cabo la automatización de la instalación. Unicamente necesitamos disponer de la ultima versión de npm y nvm para poder utilizar nodejs.

Para su instalación recurrimos a [nvm](https://github.com/creationix/nvm) y [npm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server).
Comprobamos que estan actualizadas o de lo contrario llevamos a cabo el siguiente [proceso de actualización](http://www.dbigcloud.com/bigdata/88-como-actualizar-node-js-a-la-ultima-version-estable.html).
Tras la obtención de ambas y comprobar que usamos la version de node desplegamos el archivo `Packaje.json`.

El código del `packaje.json` es el siguiente:

```
{
  "devDependencies": {
    "body-parser": "~1.15.2",
    "grunt": "~1.0.1",
    "grunt-docco": "~0.5.0",
    "docco": "~0.7.0",
    "should": "~11.1.0",
    "mocha": "3.0.2",
    "mocha-mongoose": "~1.2.0",
    "express": "~4.14.0"
  },
  "name": "JJuegoCC",
  "version": "0.0.0",
  "description": "Juego para CC",
  "main": "index.html",
  "dependencies": {
    "grunt": "~1.0.1",
    "mongoose": "~4.6.0",
    "express": "^4.13.3",
    "body-parser": "~1.15.2"
  },
  "scripts": {
    "test": "mocha"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/JaviSG91/JuegoCC.git"
  },
  "keywords": [
    "juego",
    "CC"
  ],
  "author": "JaviSG91",
  "license": "BSD-2-Clause",
  "bugs": {
    "url": "https://github.com/JaviSG91/JuegoCC/issues"
  }
}

```

Con esto npm se encargara de generar e instalar los módulos necesarios para el despliegue de la aplicación.

##Test de la aplicación:

Se han creado varios tipos de test; entre ellos podemos dividirlos en dos categorías:
- Test para comprobar carga y funcionalidad de las diferentes páginas de la aplicación.
- Test para comprobar funcionalidad básica en comunicación con BD.


###Test para comprobar carga de páginas:

- [x] Test de página inicial.
```
      it("Página inicial", function(done) {
		request(prueba_pagina)
			.get("/")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
```

- [x] Test de página de registro.
```
      it("Página de registro", function(done){
		request(prueba_pagina)
			.post("/Registro")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
```

- [x] Test de mensaje de registro satisfactorio.
```
      it("Registrando user", function(done){
		request(prueba_pagina)
		.post("/registraUser")
		.expect("Content-Type", /text\/html/)
		.expect(200, done);
	
	});
```
- [x] Test de página de acción usuario (envio de mensaje).

```
      it("Accion user" ,function(done){
		request(prueba_pagina)
		.post("/unaAccion")
		.expect("Content-Type", /text\/html/)
		.expect(200, done);
	});
```

###Test para comprobar funcionalidad:

- [x] Test de comprobación de existencia prévia de usuario e inserción.
```
      it("Comprobacion previa de usuario", function(done){
	prueba.insertarUsuario('usuarioxxx',12);
	var nombre="usuarioxxx";
	var decision;
	
	prueba.comprobacion("usuarioxxx",12,function(err,resultado){	
			assert.equal(resultado,true,"incorrecto");
		done();
	});
	
	});
```
- [x] Test de comprobación de edad de usuario existente.
```
      it("Comprobacion de edad", function(done){
	prueba.getDataUserAge("usuarioxxx",12,function(err,resultado){	
			assert.equal(resultado,true);
		done();
	});
	
	});
```
- [x] Test de comprobación de borrado de usuario.

```
      it("Borrado", function(done){
		prueba.borrado("usuarioxxx");
	prueba.comprobacion("usuarioxxx",12,function(err,resultado){	
			assert.equal(resultado,false,"incorrecto");
		done();
	});	
	
	});
```
##Integración Continua:

Se ha llevado a cabo el despliegue en la plataforma de integración continua [Travis-ci.org](https://travis-ci.org/lrdzero/CCProyect).

Utilizando el contenido del archivo integrado en nuestro repositorio [**.travis.yml**](https://github.com/lrdzero/CCProyect/blob/master/.travis.yml)

Cuyo contenido es el siguiente:

```
      language: node_js
node_js:
  - "4.1"
  - "4.0"
  - "0.12"
  - "0.10"

before_install:
   - npm install -g mocha
- npm install -g sqlite3
```

##Documentación:

Para generar el contenido de la documentación hemos utilizado el generador Grunt-docco.

Siguiendo los pasos descritos en el apartado correspondiente del [material del primer tema](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas).

#Hito 3

##Despliegue de la aplicación en Heroku.

Se ha llevado a cabo el despliegue de la aplicación mediante sincronización de la aplicación con la plataforma Heroku. Se puede acceder a la misma mediante esta [**enlace**](https://ccproyect-v-2.herokuapp.com/).

Estos son los pasos a seguir para desplegar la aplicación en Heroku:

1. Nos registramos dentro de la página de [Heroku](https://dashboard.heroku.com/)
2. Instalamos las herramientas de Heroku con el comando

        wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh  


3. Usamos el comando heroku login para hacer login con el correo registrado y la correspondiente contraseña.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/heroku_login.png)

4. Una vez hecho esto, pasamos a usar el comando heroku create para crear la aplicación en Heroku.

5. Para poner en marcha esta aplicación, se usar el comando git push heroku master y adicionalmente en el manual ofrecido por Heroku recomienda usar el comando heroku ps:scale web=1

6. Finalmente abrimos la página de nuestra aplicación con el comando heroku open

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/eje4.png)

##Añadiendo despliegue automático:

Dentro de la página de heroku, seleccionamos nuestra app y vamos a las opciones "Deploy".
Allí podemos configurar nuestra aplicación de forma que se linkee con cualquier cambio llevado a cabo en nuestro github.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/finii.png)

##Hito 4


.

![](https://drive.google.com/open?id=0ByKPAGLB_FgcMHNQSW5CVHp3cXM)
