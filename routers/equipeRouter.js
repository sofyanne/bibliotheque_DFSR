const express = require("express");

const equipeRouter = express.Router();

equipeRouter.use("/:nom", (req, res) => {
  console.log(req.params);
  res.render("equipes/equipe.html.twig");
});

equipeRouter.use("/", (req, res) => {
  console.log(req.params);
  res.render("equipes/index.html.twig");
});

module.exports = equipeRouter;
