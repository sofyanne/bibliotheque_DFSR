const EquipeModel = require("../Models/equipeModel");

exports.getTeams = (req, res, next) => {
  EquipeModel.find()
    .exec()
    .then((data) => {
      if (!data) {
        const error = new Error("Les équipes n'ont pu être chargées.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json(data);
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getTeam = (req, res, next) => {
  const id = req.params.id;
  EquipeModel.findById(id)
    .exec()
    .then((data) => {
      if (!data) {
        const error = new Error("L'Equipe n'a pas été trouvé.");
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json(data);
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postTeam = (req, res, next) => {
  if (!req.file) {
    const error = new Error("L'image est manquante");
    error.statusCode = 422;
    throw error;
  }

  const imageUrl = req.file.path;

  const newTeam = new EquipeModel({
    name: req.body.name,
    car: req.body.car,
    drivers: [
      {
        firstname: req.body.driver1firstname,
        lastname: req.body.driver1lastname,
      },
      {
        firstname: req.body.driver2firstname,
        lastname: req.body.driver2lastname,
      },
    ],
    image: imageUrl,
  });

  newTeam
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Equipe créée avec succès!",
        team: result,
        createdAt: new Date(),
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.updateTeam = (req, res, next) => {
  const imageUrl = req.file.path;
  EquipeModel.updateOne({ _id: req.params.id}, {
    
    name: req.body.name,
    car: req.body.car,
    drivers: [
      {
        firstname: req.body.driver1firstname,
        lastname: req.body.driver1lastname,
      },
      {
        firstname: req.body.driver2firstname,
        lastname: req.body.driver2lastname,
      },
    ],
    image: imageUrl,
  
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Equipe supprimée avec succès!",
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.deleteTeam = (req, res, next) => {
  EquipeModel.deleteOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Equipe supprimée avec succès!",
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
