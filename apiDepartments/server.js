const express = require("express");
const sequelize = require("sequelize");
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const db = require("./models");
const routerDepartments = require("./routers/departmentsRouter.js")
const app = express();
const PORT = process.env.PORT || 8080;
const expressSwagger = require("express-swagger-generator")(app);
const URL_BASE = "/Pedrops/v1/"
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

db.sequelize.sync();


let options =
{
    swaggerDefinition: {
        info: {
            description: 'This application has been developed by Pedro Pedro Pérez',
            title: 'SwaggerApiPedro',
            version: '1.0.0',
        },
        host: `localhost:${PORT}`,
        basePath: `${URL_BASE}`,
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname,
    files: ["./routers/*.js", "./models/*.js"]
};
expressSwagger(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(URL_BASE, routerDepartments);

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));