# Documentacion-swaggers--Nodejs-PostgreSQL-Ejercicio-main-pedro-master
##  Steps before starting the swaggers documentation

1. Before starting the swagger documentation, the first thing we have to do is go to the master branch which is main. Using the git command `git branch [nombre-rama-main]`.
2. We use the git command `git pull` to make sure the master(main) branch is up to date.
3. When the branch is up to date, we will create a new branch using the git command. `git branch [nombre-rama-nueva]`.
4. Since we already have the new branch, we position this new branch thanks to the git command `git checkout [nombre-rama-nueva]`.
5. now if we start the swaggers documentation


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

http://localhost:4000/api-docs#

# Postman:

This application consists of HTTP(GET,POST,DELETE,PUT) methods, located in the same route, but different destination:


* API route=>http://localhost:4000/Pedrops/v1/
  - GET:
  
    - http://localhost:4000/Pedrops/v1/departaments
   
    - http://localhost:4000/Pedrops/v1/departments/published
   
    - http://localhost:4000/Pedrops/v1/departments/:id
   
  - POST:
  
    - http://localhost:4000/Pedrops/v1/departaments
   
    - http://localhost:4000/Pedrops/v1/users/signup
   
    - http://localhost:4000/Pedrops/v1/users/login

    - http://localhost:4000/Pedrops/v1/users/requestPasswordChanged

    - http://localhost:4000/Pedrops/v1/users/restorePassword/:token
   
  - PUT:
  
    - http://localhost:4000/Pedrops/v1/departments/:id
   
  - DELETE:
  
    - http://localhost:4000/Pedrops/v1/departments/:id
   
    - http://localhost:4000/Pedrops/v1/departments


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
# upload data from excel file to database

In the assets folder, I have left two xlsx files: one for the departments and one for the users. So you can get into this endpoint and it loads you to the database. `forder:assets`

To know if the data of the departments or users has been inserted in the database: departments

The application that uses the database is called
pgAdmin4

for departments :
```
select * from departments;
```
for users:
```
select * from users;
```
and you can also check if it works with swagger UI by putting the excel files that I have in the assets folder. And if they are valid, they are inserted into the database, but if they are not valid, they are not inserted, including without a file or even if they are not of the excel type. You can also check with the Postman app.

In the postman, to be able to check with the files,we write the same path, but with different destinations using the POST method.

* API route=>http://localhost:4000/Pedrops/v1/
  - POST:
    - http://localhost:4000/Pedrops/v1/memory
    - http://localhost:4000/Pedrops/v1/file

# Nodemailer

before starting the nodemailer thing, as always update the main(master) branch, create a new branch and start the task to this new branch.

## what is nodemailer?
Nodemailer is a distribution package for Node. js that we can integrate into our project and allows us to send email to an SMTP server in text or HTML format.

## Structure

The first thing is to install the nodemailer package using this command:
```
npm install nodemailer
```
In the routers folder we will add two endpoints, one for the password change request using nodemailer and another for the password change.
```
router.post('/users/requestPasswordChanged', login_email);
router.post('/users/restorePassword/:token',authtoken);

```
In the userController file inside the folder you create a function to be able to send an email with the url along with the token using the nodemailer code.

the nodemailer code:
```
const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'realmadrid777111222@gmail.com',
          pass: 'gjzuyfpuneiecqwn'
        }
      });
      const email = {
        from: 'realmadrid777111222@gmail.com',
        to: req.body.email,
        subject: "restore password attempt",
        text: "RESTORE PASSWORD",
        html:
          `<a href> "http://localhost:4000/Pedrops/v1/users/restorePassword/${token}" </a>`
      }
      transporter.sendMail(email, function (err, info) {
        if (err) {
          console.log(err)
          res.status(409).json({ message: err })
        } else {
          res.status(201).json({ message: "Message sent!!!!" })
        }
      });
```
In the middlewares folder create a file for the endpoint that is to be able to change the password, for this we have to match the name of the token and email of the token with the name of body and the email of body. And if they match the password will be updated using a sql query and if they don't match it means that the token is invalid or the body.

the code for the sql query:
```
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456789",
  database: "user",
  dialect: "postgres",
  port: 5432,
});

const response = pool.query(`UPDATE users SET password='${password}' WHERE name='${req.body.name}'`);
const result = response.rows
          
```