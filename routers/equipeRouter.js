const express = require("express");
const equipeModel = require("../Models/equipeModel");

const equipeRouter = express.Router();

equipeRouter.use("/:nom", (req, res) => {
  res.render("equipes/equipe.html.twig");
});

equipeRouter.use("/", (req, res) => {
  let teams = [];
  equipeModel
    .find()
    .exec()
    .then((data) => {
      teams.push(data);
    });
  console.log(teams);
  res.render("equipes/index.html.twig");
});

module.exports = equipeRouter;
