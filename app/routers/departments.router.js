/**
 * This is to create departments
 * @route POST /departments
 * @group departments
 * @param {department.model}department.body.required department body
 * @returns {JSON} 200 -it was a success
 * @returns {Error} default -Unexpected error
 * @produces application/json
 * 
 */
/**
 * This is to display all departments
 * @route GET /departments
 * @group departments
 * @returns {Error} default -Unexpected error
 * @returns {Array.<department>}200 - an array of all departments
 * @produces application/json
 * @consumes application/json
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
 * @param {department.model}department.body.required department body
 * @param {string} id.path.required department integer
 * @produces application/json
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

/* This is a route that will call the deleteAll function in the departamentos.controller.js file. */
module.exports = app => 
{
    const departamentoss = require("../Controllers/departments.controller.js");
  
    var router = require("express").Router();
  
    
    /* Creating a new department. */
    router.post("/departments", departamentoss.create);
  
    /* Creating a route that will call the findAll function in the departamentos.controller.js file. */
    router.get("/departments", departamentoss.findAll);
  
    
   /* This is a route that will call the findAllPublished function in the departamentos.controller.js
   file. */
    router.get("/departments/published", departamentoss.findAllPublished);
  
    
    /* This is a route that will call the findOne function in the departamentos.controller.js file. */
    router.get("/departments/:id", departamentoss.findOne);
  
    
    /* This is a route that will call the update function in the departamentos.controller.js file. */
    router.put("/departments/:id", departamentoss.update);
  
    
    /* This is a route that will call the delete function in the departamentos.controller.js file. */
    router.delete("/departments/:id", departamentoss.delete);
  
    
    /* This is a route that will call the deleteAll function in the departamentos.controller.js file. */
    router.delete("/departments", departamentoss.deleteAll);
  
    /* This is a route that will call the deleteAll function in the departamentos.controller.js file. */
    //app.use('/api/departamentoss', router);
  };
