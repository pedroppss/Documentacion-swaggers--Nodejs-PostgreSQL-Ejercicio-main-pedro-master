const db = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { config } = require("dotenv");
const User = db.users;

//registering a user
//hash the users password before it is saved to the database with bcrypt
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const data = {
      name,
      email,
      role,
      password: await bcrypt.hash(password, 10),
    };
    //saving the user
    const user = await User.create(data);
    if (user) {
      let token = jwt.sign({ id: user.id, role: user.role}, process.env.secretKey, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);
      //Send user details
      return res.status(201).send({ user, token, message: "the user has been inserted successfully" });
    } else {
      return res.status(409).send("details are not correct");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};


//login authentication

const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    //Find a user by their email
    const user = await User.findOne({
      where: {
        name:name,
      }

    });

    //if the user's name is found, check the password against bcrypt
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      //if password is same generate token with user id and secret key in env file

      if (isSame) {
        let token = jwt.sign({ id: user.id, role: user.role}, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if the password matches the one in the database, go ahead and generate a cookie for the userres.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        
        //send user data
        return res.status(201).json({ user, token, message: "Authentication success" });
      } else {
        return res.status(401).send("failed authentication");
      }
    } else {
      return res.status(401).send("failed authentication");
    }
  } catch (error) {
    console.log(error);
  }
};
const visualize = async (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  const result = await User.findAll({
    where: condition
  }).catch(err => {
    res.status(500).json({ message: "error when displaying" });
  });
  res.status(201).json({ result, success: true, message: "Authorized success" })
};
const userDelete = async (req, res) => {
  try {
    const name = req.query;
    await User.destroy({
      where: {
        name: req.query.name
      }
    }).then(num => {
      if (num == 1) {
        res.status(201).json({ success: true, message: "the user has been successfully deleted" });
      } else {
        res.status(409).json({ success: false, message: "user not found" });
      }
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err })
  }

};

module.exports = {
  signup,
  login,
  visualize,
  userDelete,
  
};

