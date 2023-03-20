module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define("departamentos", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      ubicacion:{
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Departamento;
  };
