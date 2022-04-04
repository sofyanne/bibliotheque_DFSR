const EquipeModel = require("../Models/equipeModel");

exports.getTeams = (req, res, next) => {
  EquipeModel
    .find()
    .exec()
    .then((data) => {
      res.status(200).json(data);
    });
};

exports.getTeam = (req, res, next) => {
  const id = req.params.id;
  EquipeModel
    .findById(id)
    .exec()
    .then(
      (data) => {
        res.status(200).json(data);
      },
      () => {
        res.status(404).json();
        throw new Error("Not found");
      }
    )
    .catch((error) => console.log(error));
};

exports.postTeam = (req, res, next) => {
    console.log(req.body);

     const newTeam = new EquipeModel({
         name: req.body.name,
         car: req.body.car,
         drivers: [
             {
                 firstname: "test1",
                 lastname: "Test1"
             },
             {
                 firstname: "test2",
                 lastname: "Test2"
             }
         ],
         manager: req.body.manager
     });

     newTeam.save().then(result => {
         res.status(201).json({
             message: "Equipe créée avec succès!",
             team: result,
             createdAt: new Date()
         });
     }).catch(error => console.log(error));
};
