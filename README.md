# Argentina Programa 4.0

## Proyecto Integrador de Gabriel Eduardo Gómez del Tramo II - Lenguajes de Programación I - Comisión 21523 A - Epica -

![Argentina Programa 4.0](https://fmn.unsl.edu.ar/wp-content/uploads/2023/05/banner-ok-argentina-programa.jpg)

Este proyecto se centra en crear un sitio web que funcione como un foro en el que el usuario pueda crear y visualizar posts de diversos temas, con un título, contenido relacionado, fecha de creación, una imagen descripitiva y el nombre de su autor.

el sitio está diseñado con rutas y drivers que le permiten conectarse a una base de datos, que el usuario deberá crear, donde se guardarán los posts creados y desde la que se tomará la información de los posts para vizualizarlos en la pagina de inicio o home.

## Instalación de Dependencias y Ejecución

Siga estos pasos para ejecutar el proyecto en su máquina local:

1. **Clonar el repositorio o descarga el ZIP.**

2. **Instalar las dependencias con el siguiente comando:**
```
   npm i
```

3. **Configurar la base de datos MySQL:** 

   Cree una base de datos llamada `pruebabase` 

4. **¨Puede agregar los siguientes datos en el archivo .example.env y cambie el nombre a .env:**
```
   PORT=7000
   HOST_DB=localhost
   DIALECT_DB=mysql
   
```
5. **Crear la tabla de la base de datos para los posteos con el nombre "tabla_del_post" con los siguientes datos para las columnas:**
   
 ```
   tabla_del_post / utf8_general_ci
   id = int
   titulo = varchar 255
   contenido = text
   url_imagen = varchar 255
   fecha_publicacion = date 
   autor = varchar 255  
```
6. **Ejecute node app.js en la terminal de Visual Studio a traves del comando "npm run dev"; A continuación acceda de manera predeterminada a la aplicación en su navegador web en el PORT=7000 .env :**
[http://localhost:7000](http://localhost:7000).

 





