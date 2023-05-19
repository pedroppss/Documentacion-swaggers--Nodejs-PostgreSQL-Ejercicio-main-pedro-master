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

    - http://localhost:4000/Pedrops/v1/users/users
   
  - POST:
  
    - http://localhost:4000/Pedrops/v1/departaments
   
    - http://localhost:4000/Pedrops/v1/users/signup
   
    - http://localhost:4000/Pedrops/v1/users/login
   
  - PUT:
  
    - http://localhost:4000/Pedrops/v1/departments/:id
   
  - DELETE:
  
    - http://localhost:4000/Pedrops/v1/departments/:id
   
    - http://localhost:4000/Pedrops/v1/departments

    - http://localhost:4000/Pedrops/v1/users/users



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

# bcrypt_user_management

In order to do token and jwt authentication, the first thing we have to do is install bcrypt using the command:
```
npm install bcrypt
```
## What is JWT (JSON Web Tokens)?
JWT is a JSON object (JavaScript Object Notation), an open standard tool whose purpose is to establish a transmission of information between two or more fields. From these, information can be spread safely and effectively, which is also verified, since it is signed virtually. This set of information takes the web token reference, under the JSON open standard.
## Structure
Is a string composed of three parts separated by a period (.) and is serialized using base number 64. The three parts that make up this token are: header, payload, and signature.

* Header:
    - First component of the token and consists of two parts: the token type, which in this case is JWT, and the algorithm being used, which can be RSA or SHA256.
* Payload:
    -  the token claims are found. These are about an entity (user, object) and other information that goes with it.
* Signature:
    - Sign the encrypted header, the encrypted payload, the secret, and the algorithm that has been set in the header. This is done to verify that there are no changes to the responses or content of the components.

## Token authentication
In the folder called middlewares, in the file called userAuth.js, there you write the Token authentication code, if it is correct you can access that route and if it is not correct you cannot access it. Here you have an example.
```
function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "NOT AUTHORIZED" })
  }
  try {
    const token = req.headers.authorization.split(" ")[1]
    if(token){
    const payload = jwt.verify(token, process.env.secretKey)
    req.user = payload.sub
    next();
    }else if(!token){
    res.status(401).json({message:"Token not found "})
    }
    
  } catch (err) {
    return res.status(401).json({ status: "fail", message: "Invalid Token,not Authorized" });
  }
}
module.exports = isAuth; 
```
Also token authentication with role, if the user's role is administrator you can access this route but if the user's role is user you cannot access because you can only access if the user is administrator. there you have an example.
```
const authrole = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      res.status(403).send({ message: "TOKEN NOT AUTHORIZED" });
    } else {
      jwt.verify(token, process.env.secretKey, function (err, payload) {
        if (payload.role == "admin") {
          next();
        } else {
          res.status(409).json({ message: "access failed, only administrators can access" });
        }
      })
    }
  } catch (err) {
    return res.status(500).send({ success: false, message: "Invalid Token, not Authorized" });
  }
};
```
Also token authentication with role, if the user's role is administrator you can access this route and see all the users or departments but if the user's role is user you can only see the names of the users or the titles of the departments. there you have an example.
```
const authroleuser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      res.status(403).send({ message: "TOKEN NOT AUTHORIZED" });
    } else {
      jwt.verify(token, process.env.secretKey, function (err, payload) {
        if (payload.role == "admin") {
          getUsers().then(response => {
            res.status(201).json(response)
          })

        } else if (payload.role == "user") {
          getName().then(response => {
            res.status(201).json(response)
          })
        }
      })
    }
  } catch (err) {
    return res.status(500).send({ success: false, message: "Invalid Token, not Authorized" });
  }
}
```
To be able to visualize all the users or the departments and also to be able to visualize only the names of the users or the titles of the departments, it is necessary to make a sql query of the database. Application:pgAdmin4. Oh you have an example.
```
const getUsers = async () => {
  const response = await pool.query('SELECT * FROM  users');
  return response.rows
}
const getName = async () => {
  const response = await pool.query('SELECT name FROM users');
  return response.rows
}
const getDepartament = async () => {
  const response = await pool.query('SELECT * FROM departments');
  return response.rows
}
const getDepartamenttitle = async () => {
  const response = await pool.query('SELECT title FROM departments');
  return response.rows
}
```
To know if it works you can check with the Postman or Swagger UI application