module.exports = app => {
    const departamentoss = require("../Controllers/departamentos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new department
    router.post("/", departamentoss.create);
  
    // Retrieve all department
    router.get("/", departamentoss.findAll);
  
    // Retrieve all published departments
    router.get("/published", departamentoss.findAllPublished);
  
    // Retrieve a single department with id
    router.get("/:id", departamentoss.findOne);
  
    // Update a department with id
    router.put("/:id", departamentoss.update);
  
    // Delete a department with id
    router.delete("/:id", departamentoss.delete);
  
    // Delete all departments
    router.delete("/", departamentoss.deleteAll);
  
    app.use('/api/departamentoss', router);
  };
