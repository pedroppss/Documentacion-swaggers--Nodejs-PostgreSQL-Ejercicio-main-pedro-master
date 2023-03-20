const db = require("../models/index.js");
const Departamento = db.departamentoss;
const Op = db.Sequelize.Op;
 
exports.create = (req, res) => {
    // Validar solicitud.
    if (!req.body.title) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
      return;
    }
  
    // Create a departmanento
    const departamento = 
    {
      title: req.body.title,
      description: req.body.description,
      ubicacion:req.body.ubicacion,
      published: req.body.published ? req.body.published : false
    };
  
    //Guardar Departamento en la base de datos
    Departamento.create(departamento)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió algún error al crear el Departamento."
        });
      });
  };
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Departamento.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los departamentos."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Departamento.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar departamento con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar departamento with id=" + id
        });
      });
  };
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Departamento.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El departamento se actualizó con éxito."
          });
        } else {
          res.send({
            message: `No se puede actualizar departamento con id=${id}. Porque no se encontró departamento o está vacío.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar departamento with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Departamento.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El departamento se eliminó con éxito"
          });
        } else {
          res.send({
            message: `No se puede eliminar departamento con id=${id}. Porque no se encontró departamento.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar el departamento con id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Departamento.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Los departamentos se eliminaron con éxito!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar todos los departamentos."
        });
      });
  };
  exports.findAllPublished = (req, res) => {
    Departamento.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los departamentos."
        });
      });
  };
 