
/**
 * @route POST /users/signup
 * @group users -Operations about user
 * @produces application/json
 * @param {string} Authorization.header.required - Bearer-Token
 * @param {user.model} user.body.required -userName(nombre de usuario), email , password and role
 * @returns {Error} default - create user failed
 * @returns {object} 201 - An array of user info
 * 
 * 
 */
/**
 * @route POST /users/login
 * @group users -Operations about user
 * @produces application/json
 * @param {user.model} user.body.required - userName(user) and password
 * @returns {Error} default -search failed
 * @returns {object} 201 - An array of user info
 * 
 */
/**
 * @route GET /users/users
 * @group users -Operations about user
 * @produces application/json
 * @param {string} Authorization.header.required - Bearer-Token
 * @returns {Error} default - not Authorized
 * @returns {Object} 201 -access granted
 */
/**
 * @route DELETE /users/users
 * @group users -Operations about user
 * @produces application/json
 * @param {string} Authorization.header.required -Bearer-Token
 * @param {string} name.query.required - enter name to delete
 * @returns {Error}default - not access
 * @returns {Object} 201 -access granted
 */

const express = require('express')
const userController = require('../controllers/userController.js')
const { signup, login ,visualize,userDelete} = userController
const userAuth = require('../middlewares/userAuth')
const router = express.Router()


router.post("/users/signup",userAuth.saveUser,userAuth.authrole,signup);
router.post("/users/login",login,userAuth.saveUser);
router.get("/users/users",userAuth.authroleuser,visualize);
router.delete("/users/users",userAuth.authrole,userDelete);



//router.get("/users/signup", userAuth.saveUser, signup);



module.exports = router;
