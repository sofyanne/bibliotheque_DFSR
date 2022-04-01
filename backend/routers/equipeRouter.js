const express = require("express");
const equipeModel = require("../Models/equipeModel");

const equipeRouter = express.Router();

equipeRouter.use("/:id", (req, res, next) => {
  res.render("equipes/equipe.html.twig");
});

equipeRouter.get("/", (req, res, next) => {
  
  equipeModel
    .find()
    .exec()
    .then((data) => {
      res.status(200).json(data);
    });
});

module.exports = equipeRouter;
