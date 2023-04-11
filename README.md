# Documentacion-swaggers--Nodejs-PostgreSQL-Ejercicio-main-pedro-master
## How to start the application

1. We position in the main folder, in the terminal we execute the command:
```
npm install
```
2. When everything is finished installing, we change to the directory called app and execute this command to start the server:
```
node server.js
```
The listening port is 4000
if all goes well, the server will be listening on the port printed in the terminal

# Documentation

In google (app) account the URL where the swagger documentation is,
```
http://localhost:4000/api-docs#
```
# Postman:

This application consists of HTTP(GET,POST,DELETE,PUT) methods, located in the same route, but different destination:
```
**Ruta del API =>http://localhost:4000/Pedrops/v1/
 -GET:
   http://localhost:4000/Pedrops/v1/departaments
   http://localhost:4000/Pedrops/v1/departments/published
   http://localhost:4000/Pedrops/v1/departments/:id
 -POST:
   http://localhost:4000/Pedrops/v1/departaments
   http://localhost:4000/Pedrops/v1/users/signup
   http://localhost:4000/Pedrops/v1/users/login
 -PUT:
   http://localhost:4000/Pedrops/v1/departments/:id
 -DELETE:
   http://localhost:4000/Pedrops/v1/departments/:id
   http://localhost:4000/Pedrops/v1/departments
```
# PgAdmin4:

To check if you have inserted a department or a user, or even if you have updated or deleted we write:

```
select * from departments;
select * from users;
```
# Sql Shell(psql):

First we connect the database with the command  `\c databasename` databasename=departments
 
To see the description of the table we use the command  `\d departments`
 
database => departments
```
select * from departments;
select * from users;
```
 


