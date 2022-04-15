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
        firstname: "test1",
        lastname: "Test1",
      },
      {
        firstname: "test2",
        lastname: "Test2",
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
