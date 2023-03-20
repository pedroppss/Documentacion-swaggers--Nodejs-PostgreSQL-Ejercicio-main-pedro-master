const db=require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = db.users;

//registrando un usuario
//hash de la contraseña de los usuarios antes de que se guarde en la base de datos con bcrypt
const signup = async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const data = {
        userName,
        email,
        password: await bcrypt.hash(password, 10),
      };
      //salvando el usuario
      const user = await User.create(data);
   
      //si se capturan los detalles del usuario
      //generar token con la identificación del usuario y la clave secreta en el archivo env
      // establecer cookie con el token generado
      if (user) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
   
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        //Enviar detalles de los usuarios
        return res.status(201).send(user);
      } else {
        return res.status(409).send("Los detalles no son correctos");
      }
    } catch (error) {
      console.log(error);
    }
   };
   
   
   //autenticación de inicio de sesión
   
   const login = async (req, res) => {
    try {
   const { email, password } = req.body;
   
      //Encontrar un usuario por su correo electrónico
      const user = await User.findOne({
        where: {
        email: email
      } 
        
      });
   
      //si se encuentra el correo electrónico del usuario, compare la contraseña con bcrypt
      if (user) {
        const isSame = await bcrypt.compare(password, user.password);
   
       //si la contraseña es la misma generar token con la identificación del usuario y la clave secreta en el archivo env
   
        if (isSame) {
          let token = jwt.sign({ id: user.id }, process.env.secretKey, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });
   
          //si la contraseña coincide con la de la base de datos, continúe y genere una cookie para el usuario
          res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          //enviar datos de usuario
          return res.status(201).send(user);
        } else {
          return res.status(401).send("Autenticación fallida");
        }
      } else {
        return res.status(401).send("Autenticación fallida");
      }
    } catch (error) {
      console.log(error);
    }
   };
   
   module.exports = {
    signup,
    login,
   };