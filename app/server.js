const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const sequelize = require('sequelize');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;
const db = require("./models");
//const db1=require("./models/indexuser");
const userRoutes = require ("./routers/departamentosuser.router.js");

var corsOptions = 
{
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

db.sequelize.sync();

app.get("/", (req, res) => 
{
  res.json({ message: "Bienvenido a la aplicación Pedro Pérez Sánchez." });
});

require("./routers/departamentos.router")(app);
app.use("/api/users",userRoutes)


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}.`);});


//para comprobar si funciona 

//sql Shell(psql)
//primero conectamos la base de datos con el comando \c <<nombrebasesdedatos>> nombrebasededatos=departamentos
//para ver la descripcion de la tabla utilizamos el comando \d departamentos

//para comprobar si funciona lo de usuario
//select * from users; pgadmin4