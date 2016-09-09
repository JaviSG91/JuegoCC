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




###Test para comprobar carga de páginas:

- [x] Test de página inicial.
```
   
```

##Integración Continua:

Para la integración continua me he decantado por [Travis-ci.org](https://travis-ci.org/JaviSG91/JuegoCC).

En primer lugar, hay que crear un archivo .travis.yml en el repositorio:

```
language: node_js
node_js:
  - "4.1"
  - "4.0"
  - "0.12"
  - "0.10"

```

##Documentación:

Para generar el contenido de la documentación hemos utilizado el generador Grunt-docco.

Siguiendo los pasos descritos en el apartado correspondiente del [material del primer tema](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas).

#Hito 3

##Despliegue de la aplicación en Heroku.

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


Se ha de crear un archivo Procfile para indicar a Heroku que ejecutar, contendrá la siguiente línea:
web: node app.js

Tras cualquier cambio usamos git push heroku master

 [Esta es la aplicación](https://juego-cc.herokuapp.com/)

##Añadiendo despliegue automático:

1.En la página de heroku debemos encontrar el proyecto que hemos creado con heroku create, una vez reconocido nos vamos al apartado deploy y lo conectamos a nuestro repositorio en github. Además marcamos la opción "wait for ci to pass before deploy" y "enable automatic deploys" para automatizar el proceso.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy.png)


![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy2.png)


2.Una vez hecho, comprobamos dentro de nuestro repositorio en GitHub la conexión con heroku dentro de Settings->Webhooks

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy3.png)


##Hito 4



Primero debemos comprobar la versión de kernel si se va a instalar en Ubuntu, para que sea mayor de la 3.10 y comprobar también que se trata de la versión de 64 bits. Para ello usamos el comando uname -r:

En mi caso se trata de la versión 3.19.0-25-generic, por lo que no habría problema.

Seguidamente hay que añadir una gpg key con el comando:

    sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    

Una vez hecho esto, nos vamos al archivo /etc/apt/sources.list.d/docker.list (en caso de que no exista lo creamos) y añadimos una entrada en función de la versión de Ubuntu que se tenga. En mi caso se trata de Ubuntu 14.04 y la entrada a añadir es:

    deb https://apt.dockerproject.org/repo ubuntu-trusty main
    
Actualizamos el apt con:

    apt-get update

Purgamos el antiguo apt si existe:

    apt-get purge lxc-docker
    
    
Ya hemos completado la etapa de prerrequisitos, para instalarlo ahora debemos seguir los siguientes pasos:

1. Actualizamos el apt con "sudo apt-get update"

2. Instalamos docker con "sudo apt-get install docker-engine"

3. Arrancamos el demonio con el comando "sudo service docker start"

4. Finalmente probamos que funciona con "sudo docker run hello-world"

Apareciendo el siguiente mensaje:

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/3.8.1.png)

Creamos el siguiente Dockerfile:
```

FROM ubuntu:precise
RUN echo "deb http://archive.ubuntu.com/ubuntu precise universe" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y python-software-properties python g++ make redis-server libicu-dev libexpat1
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]

```

Usamos el comando sudo docker pull con nuestro proyecto:
![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/docker.png)
