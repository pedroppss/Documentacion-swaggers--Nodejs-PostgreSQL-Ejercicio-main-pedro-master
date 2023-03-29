
/**
 * 
 * @route POST /users/signup
 * @group users -Operations about user
 * @param {user.model} user.body.required -userName(nombre de usuario), email or password
 * @returns {Error} default - Unexpected error
 * @returns {object} 201 - An array of user info
 * @produces application/json
 * @consumes application/json
 */
/**
 * @route POST /users/login
 * @group users -Operations about user
 * @param {user.model} user.body.required - email or password
 * @returns {Error} default - Unexpected error
 * @returns {object} 201 - An array of user info
 * @produces application/json
 * @consumes application/json
 */

/* Importing the userController and userAuth modules. */
const express = require('express')
const userController = require('../controllers/userController.js')
const { signup, login } = userController
const userAuth = require('../middlewares/userAuth')
const router = express.Router()

/* Calling the `userAuth.saveUser` middleware function and then the `signup` controller function. */
router.post("/users/signup",userAuth.saveUser,signup);
/* Calling the `login` controller function. */
router.post('/users/login', login);

module.exports=router;