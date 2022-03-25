const express = require("express");

const equipeRouter = express.Router();

equipeRouter.use("/", (req, res) => {
  res.render("equipes/index.html.twig");
});

module.exports = equipeRouter;
