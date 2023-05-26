/**
 * This is to create departments
 * @route POST /departments
 * @group departments
 * @consume application/json
 * @param {department.model}department.body.required department body
 * @returns {JSON} 200 -it was a success
 * @returns {Error} default -Unexpected error
 * 
 */
/**
 * This is to display all departments
 * @route GET /departments
 * @group departments
 * @consume application/json
 * @returns {JSON} 200 -it was a success
 * @returns {Error} default -Unexpected error
 * @returns {Array.<department>}200 - an array of all departments
 */
/**
 * This is to display only the departments whose published
 * @route GET /departments/published
 * @group departments
 * @produces application/json
 * @param {boolean} published.query.required know if it is open or not
 * @returns {Error} default - Unexpected error
 * @returns {Array.<department>}200 -array of departments whose published
 */
/**
 * This to display only the departments whose id
 * @route GET /departments/{id}
 * @group departments
 * @produces application/json
 * @param {string} id.path.required department integer
 * @returns {Error} default -error retrieving all departments
 * @returns {Array.<department>}200 -array of departments whose id
 */
/**
 * This is to update the department whose id
 * @route PUT /departments/{id}
 * @group departments
 * @produces application/json
 * @param {department.model}department.body.required department body
 * @param {string} id.path.required department integer
 * @returns {Error} default -Unexpected error
 * @returns {JSON} 200 -department has been successfully updated
 */
/**
 * This is to remove the department whose id
 * @route DELETE /departments/{id}
 * @group departments
 * @produces application/json
 * @param {string} id.path.required department integer
 * @returns {Error} default -error deleting department
 * @returns {JSON} 200 -department has been deleted successfully
 */
/**
 * This is to remove the departments
 * @route DELETE /departments
 * @group departments
 * @produces application/json
 * @return {Error} default -error deleting all departments
 * @returns {succes:true,message= "All departments have been deleted successfully"} 200 
 */

const department = require("../controllers/departmentControler.js");
var router = require("express").Router();

router.post("/departments", department.create);
router.get("/departments", department.findAll);
router.get("/departments/published", department.findAllPublished);
router.get("/departments/:id", department.findOne);
router.put("/departments/:id", department.update);
router.delete("/departments/:id", department.delete);
router.delete("/departments", department.deleteAll);


module.exports = router;