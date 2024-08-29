<p align="center">
<img src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" width="200" alt="node Logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" width="150" alt="Mongo Logo" />
</p>

# Ejecutar el proyecto en modo desarrollo

1. Reconstruir los modulos de node
```
npm install
```

2. Configurar las variables de entorno 
* renombrar el archivo __template.env__ a __.env__
* establecer los valores de las variables

3. Ejecutar el comando para levantar la aplicacion
```
npm run start:dev
```

## Enpoint
* URL
```
http://localhost:3001/books
```
* ApiDocs by postman
https://documenter.getpostman.com/view/23534694/2sAXjJ7ZZy

#### Cargar datos de prueba.
Al momento de consultar este endpoint se borraran todos los datos ya registrados y se insertaran datos de prueba

```
http://localhost:3001/books/seed
```

#### Stack usado 
* MongoDB
* NodeJS
* Express

## Integrantes del Grupo.
- Steven Bossio Leal
- Emanuel Caceres Cabarcas.
