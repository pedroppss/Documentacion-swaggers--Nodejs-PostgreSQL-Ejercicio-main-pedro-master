
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
/**
 * @route POST /users/requestPasswordChanged
 * @group users -Operations about user
 * @produces application/json
 * @param {user.model} user.body.required -name and email
 * @returns {Error} default - error message sent
 * @returns {success:true,message="Message sent"} 201
 */
/** 
* @route POST /users/restorePassword/{token}
* @group users -Operations about user
* @produces application/json
* @param {string} token.path.required -Enter token
* @param {user.model} user.body.required -name , email, new password
* @returns {Error} default - password updated failed
* @returns {success:true, message="password updated succesfully"} 201
*/

const express = require('express')
const userController = require('../controllers/userController.js')
const { signup, login ,visualize,userDelete,login_email} = userController
const userAuth = require('../middlewares/userAuth')
const router = express.Router()


router.post("/users/signup",userAuth.saveUser,userAuth.authrole,signup);
router.post("/users/login",login,userAuth.saveUser);
router.get("/users/users",userAuth.authroleuser,visualize);
router.delete("/users/users",userAuth.authrole,userDelete);
router.post("/users/requestPasswordChanged",login_email);
router.post("/users/restorePassword/:token",userAuth.change_Password);





module.exports = router;
