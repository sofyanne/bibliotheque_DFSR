const express = require("express");
const equipeModel = require("../Models/equipeModel");

const equipeRouter = express.Router();

equipeRouter.use("/:id", (req, res) => {
  res.render("equipes/equipe.html.twig");
});

equipeRouter.get("/", (req, res) => {
  equipeModel
    .find()
    .exec()
    .then((data) => {
      res.render("equipes/index.html.twig", { teams: data });
    });
});

module.exports = equipeRouter;
