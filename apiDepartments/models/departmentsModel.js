/**
 * 
 * @typedef department
 * @property {string} title.required 
 * @property {string} description.required
 * @property {string} location.required
 * @property {boolean} published.required
 * 
 */
module.exports = (sequelize, Sequelize) => {
    const department = sequelize.define("departments", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      location:{
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return department;
  };