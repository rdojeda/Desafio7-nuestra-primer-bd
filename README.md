# DEPLOY 

## Crear y levantar un proyecto en NodeJS 

### Instalación


- 1 - Crear el package.json
	
	`$ npm init`


- 2 - Instalar nodemon de forma global	
	
	`$ npm install nodemon -g`


- 3 - Crear un script en el package.json para que nodemon ejecute automáticamente cada cambio 
	
	"scripts":{
		"start" : "nodemon server.js"
	}


- 4 - Para que nodemon se ejecute en cada cambio, ejecutar por terminal
 	
 	`$ nodemon server.js o npm run start`


 	
- 5 - Instalar el módulo express 
	
    `$ npm install express`


- 6 - Instalar todas las dependencias que el proyecto requiera

    `$ npm install morgan`

    `$ npm install --save multer `


- 7 - Crear el archivo .gitignore para evitar subir contenido innecesario al repositorio, como por ejemplo node_modules


### Estilado con bootstrap 5
[bootstrap docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/)


### Manejo de  archivos con Multer
[Multer docs](https://www.npmjs.com/package/multer)


### Clonar el repositorio

`$ git clone url`


### Cómo contribuir

Puedes crear un pull request al proyecto

### Licencia

MIT