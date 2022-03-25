const express = require("express");

const equipeRouter = express.Router();

equipeRouter.use("/", (req, res) => {
  res.render("equipes/index.html.twig");
});

equipeRouter.use("/equipes/:nom", (req, res) => {
  console.log(req);
});

module.exports = equipeRouter;
